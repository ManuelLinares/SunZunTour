import { Component, OnInit, HostListener } from '@angular/core';
import { TripConfig } from '../page-config/trip-config';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { BookDialogComponent } from '../book-dialog/book-dialog.component';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router
  ) { }

  config: TripConfig;

  backgroundPositionY: number;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.innerWidth > 600) {
      const number = window.scrollY;
      this.backgroundPositionY = -number / 2;
    }
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { config: TripConfig }) => {
        this.config = data.config;
      });
  }

  openDialog() {
    this.dialog.open(BookDialogComponent, {
      data: {
        name: this.config.name,
        id: this.route.snapshot.paramMap.get('trip'),
        price: this.config.price
      }
    });
  }

  goToPlaces() {
    this.router.navigate([this.route.snapshot.url[0].path]);
  }

}
