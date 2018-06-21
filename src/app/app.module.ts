import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { HttpModule } from "@angular/http";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlacesComponent } from './places/places.component';
import { SwiperModule } from 'angular2-useful-swiper';
import { MdToolbarModule, MdButtonModule, MdCardModule, MdMenuModule, MdIconModule } from '@angular/material';
import { TripComponent } from './trip/trip.component';
import { PlaceConfigService } from './place-config/place-config.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlaceConfigResolverService } from './place-config-resolver/place-config-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PlacesComponent,
    TripComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdIconModule,
    HttpModule
  ],
  providers: [PlaceConfigService, PlaceConfigResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
