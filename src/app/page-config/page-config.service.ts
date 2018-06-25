import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { TextLocaleService } from "../text-locale/text-locale.service";
import { PlaceConfig } from "./place-config";
import { TripConfig } from "./trip-config";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class PageConfigService {

  constructor(
    private http: Http,
    private textLoc: TextLocaleService
  ) { }

  getPlace(place: string): Observable<PlaceConfig> {
    return this.http.get('assets/config/' + this.textLoc.getLang() + '/' + place + '.json')
      .map(res => res.json() as PlaceConfig);
  }

  getTrip(place: string, trip: string): Observable<TripConfig> {
    return this.http.get('assets/config/'  + this.textLoc.getLang() + '/' + place + '/' + trip + '.json')
      .map(res => res.json() as TripConfig);
  }

}
