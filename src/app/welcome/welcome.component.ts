import { Component } from '@angular/core';
import { polyfill } from "smoothscroll-polyfill";
import { MatDialog } from '@angular/material';
import { BookDialogComponent } from "../book-dialog/book-dialog.component";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(
    private dialog: MatDialog
  ) {
    polyfill();
  }

  scrollDownCarousel(){
    let toolbarWidth = 64;
    if (window.innerWidth <= 600) {
      toolbarWidth = 56;
    }
    window.scrollTo({
      top: window.innerHeight - toolbarWidth,
      left: 0,
      behavior: 'smooth'
    });
  }

  config = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 1,
    loop: true,
    slidesPerView: 1,
    effect: 'slide',
    autoplay: 5000,
    autoplayDisableOnInteraction: false,
    speed: 1000
  };

  openDialog(tripName: string, tripId: string, tripPrice: number) {
    let dialogRef = this.dialog.open(BookDialogComponent, {
      data: {
        name: tripName,
        id: tripId,
        price: tripPrice
      }
    });
  }
}
