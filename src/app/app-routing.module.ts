import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CountriesDetailsComponent } from "./pages/countries-details/countries-details.component";
import { CountriesListComponent } from "./pages/countries-list/countries-list.component";

const routes: Routes = [
  { path: '', component: CountriesListComponent },
  {
    path: 'country/:country',
    component: CountriesDetailsComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }