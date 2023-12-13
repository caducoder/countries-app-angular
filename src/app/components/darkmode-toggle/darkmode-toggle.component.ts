import { Component } from '@angular/core';
import { Mode } from 'src/app/model/darkmode';
import { ModeToggleService } from './darkmode-toggle.service';

@Component({
  selector: 'app-darkmode-toggle',
  templateUrl: './darkmode-toggle.component.html',
  styleUrls: ['./darkmode-toggle.component.css']
})
export class DarkmodeToggleComponent {
  currentMode: Mode = Mode.LIGHT;

  constructor(private modeToggleService: ModeToggleService) {
    this.modeToggleService.modeChanged$.subscribe((mode: Mode) => {
      this.currentMode = mode;
    });
  }

  toggle() {
    this.modeToggleService.toggleMode();
  }

}
