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
  MatDialog,
  MatNativeDateModule
} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
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
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    HttpModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    PlaceConfigService,
    TripConfigService,
    MatDialog,
    TextLocaleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
