import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./footer/footer";
import { Navbar } from "./navbar/navbar";
import { Contact } from "./contact/contact";
import { Learning } from "./learning/learning";


@Component({
  selector: 'app-root',
  imports: [Footer, Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'arka-school';
}
