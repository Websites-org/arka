import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-facility',
  imports: [],
  templateUrl: './facility.html',
  styleUrl: './facility.css'
})
export class Facility {
  ngOnInit(): void {
    AOS.init({
      duration: 1000, // duration of animation in ms
      once: false
    });
  }
}
