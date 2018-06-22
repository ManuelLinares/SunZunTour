import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router: Router) { };

  public navIsFixed: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.scrollY;
    if (number > 15) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 15) {
      this.navIsFixed = false;
    }
  }

  ngOnInit() {
    this.router.events.subscribe((event: NavigationEnd) => {
      if (event instanceof NavigationEnd) {
        window.scroll(window.scrollX, 0);
      }
    });
  }
}
