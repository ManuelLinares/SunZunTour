import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationStart } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router: Router) { };

  title = 'SUN ZUN TOUR';

  public navIsFixed: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    //let number = this.document.body.scrollTop;
    let number = window.scrollY;
    if (number > 15) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 15) {
      this.navIsFixed = false;
    }
  }

  ngOnInit() {
    this.router.events.subscribe((event: NavigationStart) => {
      //this.document.body.scrollTop = 0;
      window.scroll(window.scrollX, 0);
    });
  }
}
