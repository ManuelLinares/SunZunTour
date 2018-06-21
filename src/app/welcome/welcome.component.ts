import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  config = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 1,
    loop: true,
    slidesPerView: 1,
    effect: 'fade',
    autoplay: 5000,
    autoplayDisableOnInteraction: false,
    speed: 1000
  };
}
