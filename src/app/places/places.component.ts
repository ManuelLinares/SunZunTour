import { Component, OnInit } from '@angular/core';
import { PlaceConfigService } from "../place-config/place-config.service";
import { PlaceConfig, CardConfig } from "../place-config/place-config";
import { ActivatedRoute, ParamMap } from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  constructor(
    private placeConfig: PlaceConfigService,
    private route: ActivatedRoute
  ) { }

   /* ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.placeConfig.getPlace(params.get('place')))
      .subscribe(config => this.config = config);
  }  */
  
  ngOnInit() {
    this.route.data
     .subscribe((data: {config: PlaceConfig}) => {
      this.config = data.config;
     });
  }

  config: PlaceConfig;

}
