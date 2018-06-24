import { Component, OnInit, HostListener } from '@angular/core';
import { PlaceConfig } from "../page-config/place-config";
import { ActivatedRoute } from "@angular/router";
import { MatDialog } from "@angular/material";
import { BookDialogComponent } from "../book-dialog/book-dialog.component";

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.innerWidth > 600) {
      let number = window.scrollY;
      this.backgroundPositionY = -number / 2;
    }
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
