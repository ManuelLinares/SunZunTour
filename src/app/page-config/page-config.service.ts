import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from "@angular/http";
import { TextLocaleService } from "../text-locale/text-locale.service";
import { PlaceConfig } from "./place-config";
import { TripConfig } from "./trip-config";
import { Observable } from "rxjs";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/merge";
import "rxjs/add/operator/mergeMap";
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Injectable()
export class PageConfigService {

  constructor(
    private http: Http,
    private textLoc: TextLocaleService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) { 
    this.loadingPage = this.router.events.filter(event => event instanceof NavigationEnd).map(() => false)
      .merge(this.router.events.filter(event => event instanceof NavigationStart).map(() => true));
   }

   getLoadingPage(): Observable<boolean> {
     return this.loadingPage;
   }

  loadingPage: Observable<boolean>;

  getPlace(place: string): Observable<PlaceConfig> {
    return this.http.get('assets/config/' + this.textLoc.getLang() + '/' + place + '.json')
      .map(res => res.json() as PlaceConfig)
      .flatMap(data => {
        let imgUrls = data.cards.map(val => val.imgUrl);
        imgUrls.push(data.mainImgUrl);
        return Observable.forkJoin(imgUrls.map(val => this.http.get(<string>val, {responseType: ResponseContentType.Blob})))
          .map(res => {
            let imgs = res.map(val => this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(val.blob())));
            data.mainImgUrl = imgs.pop();
            imgs.map((val, index) => data.cards[index].imgUrl = val);
            return data;
          });
      });
  }

  getTrip(place: string, trip: string): Observable<TripConfig> {
    return this.http.get('assets/config/'  + this.textLoc.getLang() + '/' + place + '/' + trip + '.json')
      .map(res => res.json() as TripConfig)
      .flatMap((data: TripConfig) => {
        let imgUrls = data.prop.map(val => val.imgUrl);
        imgUrls.push(data.mainImgUrl);
        return Observable.forkJoin(imgUrls.map(val => this.http.get(<string>val, {responseType: ResponseContentType.Blob})))
          .map(res => {
            let imgs = res.map(val => this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(val.blob())));
            data.mainImgUrl = imgs.pop();
            imgs.map((val, index) => data.prop[index].imgUrl = val);
            return data;
          })
      })
  }

}