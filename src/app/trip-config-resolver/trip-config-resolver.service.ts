import { Injectable, Inject } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, NavigationExtras } from "@angular/router";
import { TripConfigService } from "../trip-config/trip-config.service";
import { TripConfig } from "../trip-config/trip-config";
import { DOCUMENT } from "@angular/platform-browser";

@Injectable()
export class TripConfigResolverService {

  constructor(
    private tripConfig: TripConfigService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<TripConfig> {
    let place = route.paramMap.get('place');
    let trip = route.paramMap.get('trip');
    return this.tripConfig.getTrip(place, trip)
      .then(config => {
        if (config) {
          return config;
        } else {
          let nav: NavigationExtras = {
            queryParams: { badUrl: this.document.URL }
          }
          this.router.navigate(['/404'], nav);
          return null;
        }
      })
      .catch(reason => {
        let nav: NavigationExtras = {
          queryParams: { badUrl: this.document.URL }
        }
        this.router.navigate(['/404'], nav);
        return null;
      });
  }

}
