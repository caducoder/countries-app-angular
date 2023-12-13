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
  title: string = 'countries-app'
  currentMode: Mode = Mode.LIGHT;

  constructor(private countryService: CountryService, private modeToggleService: ModeToggleService) {
    this.modeToggleService.modeChanged$.subscribe((mode: Mode) => {
      this.currentMode = mode;
    });
  }

}
