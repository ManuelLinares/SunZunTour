import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlacesComponent } from './places/places.component';

const routes: Routes = [
  {
    path: 'home',
    component: WelcomeComponent
  }, {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'vinales',
    component: PlacesComponent
  }, {
    path: 'varadero',
    component: PlacesComponent
  }, {
    path: 'zapata-swamp',
    component: PlacesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
