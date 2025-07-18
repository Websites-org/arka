import { Component } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';

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

    this.titleService.setTitle('Modern Facilities at Arka - Top School in Kolar');

    this.metaService.updateTag({
      name: 'description',
      content: 'Smart classrooms, labs, library and more at Kolar’s best English medium school from pre-primary to secondary level.'
    });
  }
  constructor(private titleService: Title, private metaService: Meta) { }

}
