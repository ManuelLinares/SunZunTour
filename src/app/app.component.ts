import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( @Inject(DOCUMENT) private document: Document) { };

  title = 'Sun Zun Tour';

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
}
