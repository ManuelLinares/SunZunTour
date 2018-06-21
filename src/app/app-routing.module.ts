import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlacesComponent } from './places/places.component';
import { TripComponent } from './trip/trip.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PlaceConfigResolverService } from "./place-config-resolver/place-config-resolver.service";
import { TripConfigResolverService } from "./trip-config-resolver/trip-config-resolver.service";

const routes: Routes = [
  {
    path: 'home',
    component: WelcomeComponent
  }, {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: '404',
    component: PageNotFoundComponent
  }, {
    path: ':place',
    component: PlacesComponent,
    resolve: {
      config: PlaceConfigResolverService
    }
  }, {
    path: ':place/:trip',
    component: TripComponent,
    resolve: {
      config: TripConfigResolverService
    }
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    PlaceConfigResolverService,
    TripConfigResolverService
  ]
})
export class AppRoutingModule { }
