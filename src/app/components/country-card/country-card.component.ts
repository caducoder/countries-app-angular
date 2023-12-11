import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent {

  @Input() name: string = ''

  @Input() population: string = ''

  @Input() capital: string = ''

  @Input() region: string = ''

  @Input() flag: string = ''

}
