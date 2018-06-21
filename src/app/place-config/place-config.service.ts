import { Injectable } from '@angular/core';
import { PlaceConfig } from "./place-config";
import { Http } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class PlaceConfigService {

  constructor(private http: Http) { }

  getPlace(place: string): Promise<PlaceConfig> {
    return this.http.get('assets/config/places.json')
      .toPromise()
      .then(res => res.json() as PlaceConfig[])
      .then((places: PlaceConfig[]) => places.find(value => value.id === place));
  }

}
