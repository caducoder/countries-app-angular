import { Component, Input } from '@angular/core';
import { ModeToggleService } from '../darkmode-toggle/darkmode-toggle.service';
import { Mode } from 'src/app/model/darkmode';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent {
  currentMode: Mode = Mode.LIGHT

  constructor(private modeToggleService: ModeToggleService) {
    this.modeToggleService.modeChanged$.subscribe((mode: Mode) => {
      this.currentMode = mode;
    });
  }

  @Input() name: string = ''

  @Input() population: string = ''

  @Input() capital: string = ''

  @Input() region: string = ''

  @Input() flag: string = ''

}
