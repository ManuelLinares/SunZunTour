import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { TextLocaleService } from "../text-locale/text-locale.service";
import { PlaceConfig } from "./place-config";
import { TripConfig } from "./trip-config";
import 'rxjs/Rx';

@Injectable()
export class PageConfigService {

  constructor(
    private http: Http,
    private textLoc: TextLocaleService
  ) { }

  getPlace(place: string): Promise<PlaceConfig> {
    return this.http.get('assets/config/' + this.textLoc.getLang() + '/places.json')
      .toPromise()
      .then(res => res.json() as PlaceConfig[])
      .then((places: PlaceConfig[]) => places.find(value => value.id === place));
  }

  getTrip(place: string, trip: string): Promise<TripConfig> {
    return this.http.get('assets/config/'  + this.textLoc.getLang() + '/' + place + '/' + trip + '.json')
      .toPromise()
      .then(res => res.json() as TripConfig);
  }

}
