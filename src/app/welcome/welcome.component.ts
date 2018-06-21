import { Component, OnInit } from '@angular/core';
import { polyfill } from "smoothscroll-polyfill";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { polyfill(); }

  ngOnInit() {
  }

  scrollDownCarousel(el){
    window.scrollTo({
      top: window.innerHeight - 64,
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
    speed: 1000,
    coverflow: {
      rotate: 40,
      stretch: 0,
      depth: 80,
      modifier: 1,
      slideShadows: true
    }
  };
}
