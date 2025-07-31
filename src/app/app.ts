import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./footer/footer";
import { Navbar } from "./navbar/navbar";
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [Footer, Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'arka-school';
  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
