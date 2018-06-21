import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import { Router, NavigationStart } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) { };

  title = 'SUN ZUN TOUR';

  public navIsFixed: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.document.body.scrollTop;
    if (number > 15) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 15) {
      this.navIsFixed = false;
    }
  }

  ngOnInit() {
    this.router.events.subscribe((event: NavigationStart) => {
      this.document.body.scrollTop = 0;
    });
  }
}
