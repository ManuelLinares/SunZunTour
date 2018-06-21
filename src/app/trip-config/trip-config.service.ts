import { Injectable } from '@angular/core';
import { TripConfig } from "./trip-config";
import { Http } from "@angular/http";

@Injectable()
export class TripConfigService {

  constructor(private http: Http) { }

  getTrip(place: string, trip: string): Promise<TripConfig> {
    return this.http.get('assets/config/' + place + '/' + trip + '.json')
      .toPromise()
      .then(res => res.json() as TripConfig);
  }

}
