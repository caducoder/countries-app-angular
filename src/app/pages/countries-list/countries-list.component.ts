import { Component } from '@angular/core';
import { ModeToggleService } from 'src/app/components/darkmode-toggle/darkmode-toggle.service';
import { CountryService } from 'src/app/country.service';
import { TinyCountry } from 'src/app/model/country';
import { Mode } from 'src/app/model/darkmode';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent {
  currentMode: Mode = Mode.LIGHT;

  regions: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
  selectedRegion: string = ''

  countries: TinyCountry[]
  filteredCountries: TinyCountry[]

  constructor(private countryService: CountryService, private modeToggleService: ModeToggleService) {
    this.modeToggleService.modeChanged$.subscribe((mode: Mode) => {
      this.currentMode = mode;
    });
    this.countries = []
    this.filteredCountries = []
  }

  ngOnInit() {
    this.getCountries()
  }

  getCountries() {
    this.countryService.getAllCountries()
      .subscribe((resp) => {
        const paises = resp
          .map((ct) => ({ ...ct, population: new Intl.NumberFormat().format(ct.population), capital: ct.capital?.at(0), flagUrl: ct.flags.png }))
        this.countries = paises;
        this.filteredCountries = paises;
      })
  }

  filterByRegion() {
    if (this.selectedRegion) {
      this.filteredCountries = this.countries.filter((ct) => ct.region === this.selectedRegion);
    } else {
      this.filteredCountries = this.countries;
    }
  }

  filterByName(text: string) {
    console.log(text)
    if (!text) {
      this.filteredCountries = this.countries
      return
    }

    this.filteredCountries = this.countries.filter(
      country => country?.name.common.toLowerCase().includes(text.toLowerCase())
    )
  }
}
