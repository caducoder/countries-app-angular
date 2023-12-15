import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeToggleService } from 'src/app/components/darkmode-toggle/darkmode-toggle.service';
import { Mode } from 'src/app/model/darkmode';
import { Location } from '@angular/common';
import { CountryService } from 'src/app/country.service';
import { Country, CountryDetails } from 'src/app/model/country';

@Component({
  selector: 'app-countries-details',
  templateUrl: './countries-details.component.html',
  styleUrls: ['./countries-details.component.css']
})
export class CountriesDetailsComponent implements OnInit {
  country: CountryDetails;
  currentMode: Mode = Mode.LIGHT;

  constructor(
    private location: Location,
    private modeToggleService: ModeToggleService,
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {
    this.modeToggleService.modeChanged$.subscribe((mode: Mode) => {
      this.currentMode = mode;
    });
    this.country = {} as CountryDetails;
  }

  ngOnInit(): void {
    const name = this.activatedRoute.snapshot.paramMap.get('country');
    this.countryService.getByFullName(name!)
      .subscribe(resp => {
        this.country = {
          ...resp[0],
          currencies: Object.entries(resp[0].currencies).at(0)?.[1].name,
          languages: Object.entries(resp[0].languages).map(ln => ln[1]).join(', '),
          nativeName: Object.entries(resp[0].name.nativeName).at(0)?.[1].official,
          flagUrl: resp[0].flags.png,
          capital: resp[0].capital?.join(', '),
          population: new Intl.NumberFormat().format(resp[0].population)
        }

      })
  }

  goBack(): void {
    this.location.back();
  }
}
