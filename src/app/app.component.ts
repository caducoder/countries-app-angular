import { Component } from '@angular/core';
import { Country, TinyCountry } from './model/country';
import { CountryService } from './country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countries-app';
  regions: string[] = ["africa", "america", "asia", "europe", "oceania"]
  selectedRegion: string = ''

  countries: TinyCountry[]

  constructor(private countryService: CountryService) {
    this.countries = []
  }

  ngOnInit() {
    this.getCountries()
  }

  getCountries() {
    this.countryService.getAllCountries()
      .subscribe((resp) => {
        this.countries = resp.map((ct) => ({ ...ct, population: new Intl.NumberFormat().format(ct.population), capital: ct.capital?.at(0), flagUrl: ct.flags.png }))
        // console.log(resp)
      })
  }

}
