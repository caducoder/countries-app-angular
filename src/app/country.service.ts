import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './model/country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>("https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region")
  }

  getByFullName(countryName: string) {
    return this.httpClient.get<Country[]>(`https://restcountries.com/v3.1/name/${countryName}?fullText=true&fields=name,flags,capital,population,region,currencies,subregion,tld,languages,borders`)
  }
}
