import { Injectable, Inject } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, NavigationExtras } from "@angular/router";
import { PlaceConfigService } from "../place-config/place-config.service";
import { PlaceConfig } from "../place-config/place-config";
import { DOCUMENT } from "@angular/platform-browser";

@Injectable()
export class PlaceConfigResolverService implements Resolve<PlaceConfig>{

  constructor(
    private placeConfig: PlaceConfigService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<PlaceConfig> {
    let place = route.paramMap.get('place');
    return this.placeConfig.getPlace(place).then(config => {
      if (config) {
        return config;
      } else {
        let nav: NavigationExtras = {
          queryParams: {badUrl: this.document.URL}
        }
        this.router.navigate(['/404'], nav);
        return null;
      }
    });
  }

}
