import { Component, OnInit, HostListener } from '@angular/core';
import { PlaceConfigService } from "../place-config/place-config.service";
import { PlaceConfig } from "../place-config/place-config";
import { ActivatedRoute } from "@angular/router";
import { MdDialog } from "@angular/material";
import { BookDialogComponent } from "../book-dialog/book-dialog.component";

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  constructor(
    private placeConfig: PlaceConfigService,
    private route: ActivatedRoute,
    private dialog: MdDialog
  ) { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.scrollY;
    this.backgroundPositionY = -number / 2;
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { config: PlaceConfig }) => {
        this.config = data.config;
      });
  }

  config: PlaceConfig;

  backgroundPositionY: number;

  openDialog(tripName: string, tripId: string) {
    let dialogRef = this.dialog.open(BookDialogComponent, {
      data: {
        name: tripName,
        id: tripId
      }
    });
  }

}
