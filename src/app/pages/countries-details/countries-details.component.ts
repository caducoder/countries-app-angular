import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeToggleService } from 'src/app/components/darkmode-toggle/darkmode-toggle.service';
import { Mode } from 'src/app/model/darkmode';
import { Location } from '@angular/common';
import { CountryService } from 'src/app/country.service';
import { Country } from 'src/app/model/country';

@Component({
  selector: 'app-countries-details',
  templateUrl: './countries-details.component.html',
  styleUrls: ['./countries-details.component.css']
})
export class CountriesDetailsComponent implements OnInit {
  country: Country;
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
    this.country = {} as Country;
  }

  ngOnInit(): void {
    const name = this.activatedRoute.snapshot.paramMap.get('country');
    this.countryService.getByFullName(name!)
      .subscribe(resp => {
        this.country = resp[0]
      })
  }

  goBack(): void {
    this.location.back();
  }
}
