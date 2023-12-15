import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { DarkmodeToggleComponent } from './components/darkmode-toggle/darkmode-toggle.component';
import { ModeToggleService } from './components/darkmode-toggle/darkmode-toggle.service';
import { MODE_STORAGE_SERVICE, ModeLocalStorageService } from './components/darkmode-toggle/darkmode-storage.service';
import { CountriesListComponent } from './pages/countries-list/countries-list.component';
import { CountriesDetailsComponent } from './pages/countries-details/countries-details.component';
import { ToTopButtonComponent } from './components/to-top-button/to-top-button.component';

const routes: Routes = [
  { path: '', component: CountriesListComponent },
  {
    path: ':country',
    component: CountriesDetailsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CountryCardComponent,
    DarkmodeToggleComponent,
    CountriesListComponent,
    CountriesDetailsComponent,
    ToTopButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ModeToggleService,
    {
      provide: MODE_STORAGE_SERVICE,
      useClass: ModeLocalStorageService,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
