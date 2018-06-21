import { Component, OnInit } from '@angular/core';
import { TripConfigService } from "../trip-config/trip-config.service";
import { TripConfig, SectionConfig } from "../trip-config/trip-config";
import { ActivatedRoute, ParamMap } from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  constructor(
    private tripConfig: TripConfigService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { config: TripConfig }) => {
        this.config = data.config;
      });
  }

  config: TripConfig;
  
}
