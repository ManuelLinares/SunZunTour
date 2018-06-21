import { Component, OnInit, HostListener } from '@angular/core';
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

  @HostListener("window:scroll", [])
  onWindowScroll() {
    //let number = this.document.body.scrollTop;
    let number = window.scrollY;
    this.backgroundPositionY = -number / 2;
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { config: TripConfig }) => {
        this.config = data.config;
      });
  }

  config: TripConfig;

  backgroundPositionY: number;
  
}
