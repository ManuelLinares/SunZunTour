import { Injectable, Inject } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, NavigationExtras } from '@angular/router';
import { PageConfigService } from '../page-config/page-config.service';
import { PlaceConfig } from '../page-config/place-config';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable()
export class PlaceConfigResolverService implements Resolve<PlaceConfig> {

  constructor(
    private placeConfig: PageConfigService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const place = route.paramMap.get('place');
    return this.placeConfig.getPlace(place)
      .catch(reason => {
        const nav: NavigationExtras = {
          queryParams: { badUrl: this.document.URL }
        };
        this.router.navigate(['/404'], nav);
        return Observable.empty();
      });
  }

}
