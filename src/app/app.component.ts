import { Component } from '@angular/core';
import { Country, TinyCountry } from './model/country';
import { CountryService } from './country.service';
import { Mode } from './model/darkmode';
import { ModeToggleService } from './components/darkmode-toggle/darkmode-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
        console.log(paises)
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

}
