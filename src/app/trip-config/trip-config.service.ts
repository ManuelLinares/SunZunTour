import { Injectable } from '@angular/core';
import { TripConfig } from "./trip-config";
import { Http } from "@angular/http";
import { TextLocaleService } from "../text-locale/text-locale.service";

@Injectable()
export class TripConfigService {

  constructor(
    private http: Http,
    private textLoc: TextLocaleService
  ) { }

  getTrip(place: string, trip: string): Promise<TripConfig> {
    return this.http.get('assets/config/'  + this.textLoc.getLang() + '/' + place + '/' + trip + '.json')
      .toPromise()
      .then(res => res.json() as TripConfig);
  }

}
