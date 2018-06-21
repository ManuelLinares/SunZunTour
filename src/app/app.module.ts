import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlacesComponent } from './places/places.component';
import { SwiperModule } from 'angular2-useful-swiper';
import {
  MdToolbarModule,
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdIconModule,
  MdDialogModule,
  MdDialog,
  MdInputModule,
  MdFormFieldModule,
  MdDatepickerModule,
  MdNativeDateModule
} from '@angular/material';
import { TripComponent } from './trip/trip.component';
import { PlaceConfigService } from './place-config/place-config.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TripConfigService } from "./trip-config/trip-config.service";
import { BookDialogComponent } from './book-dialog/book-dialog.component';
import { TranslatePipe } from './translate-pipe/translate.pipe';
import { TextLocaleService } from "./text-locale/text-locale.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PlacesComponent,
    TripComponent,
    PageNotFoundComponent,
    BookDialogComponent,
    TranslatePipe
  ],
  entryComponents: [
    BookDialogComponent
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
    HttpModule,
    MdDialogModule,
    MdInputModule,
    MdFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  providers: [
    PlaceConfigService,
    TripConfigService,
    MdDialog,
    TextLocaleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
