import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-learning',
  imports: [CommonModule],
  templateUrl: './learning.html',
  styleUrl: './learning.css'
})
export class Learning {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Curriculum | Pre-Primary to Secondary School in Kolar');

    this.metaService.updateTag({
      name: 'description',
      content: 'Explore our English medium curriculum from pre-primary to secondary with smart class, values and active learning.'
    });

    AOS.init({
      duration: 1000, // duration of animation in ms
      once: false
    });
  }

  activeSection: string = 'prePrimary';

  sections = [
    {
      id: 'prePrimary',
      title: 'Pre-Primary (Nursery, LKG & UKG)',
      color: '#55A802',
      content: `In our pre-primary classrooms, learning begins with joy. Children are encouraged to explore,
        imagine and express through songs, storytelling, games and art. Our teachers focus on building early literacy,
        numeracy and motor skills in a safe, nurturing space where every child is valued. The play-way and DIY (Do-It-Yourself)
        methods make learning both fun and meaningful.`,
      image: '/pre-primary-nursery-lkg-ukg-arka-school-kolar.png',
      alt: "Pre-primary kids learning through play at Arka School Kolar"
    },
    {
      id: 'primary',
      title: 'Primary',
      color: '#00457C',
      content: 'Our primary school program lays a strong academic foundation while focusing on character and curiosity. Children are taught core subjects through engaging activities and simple explanations that build understanding. We also introduce team-based projects, nature learning, and practical thinking that develop responsibility and a love for learning.',
      image: '/primary-classes-arka-international-school-kolar.png',
      alt: "Primary students learning core subjects at Arka School Kolar"
    },
    {
      id: 'higherPrimary',
      title: 'Higher Primary',
      color: '#DA251C',
      content: 'In the higher primary years, students deepen their knowledge while building independence. Our curriculum is designed to develop strong conceptual understanding, logical reasoning, and communication skills. Through a balance of academics, activities, and values education, we help children become responsible learners and thoughtful citizens.',
      image: '/higher-primary-education-arka-school-kolar.png',
      alt: "Higher primary students exploring concepts at Arka School"
    },
    {
      id: 'secondary',
      title: 'Secondary',
      color: '#FFE200',
      content: 'At the secondary level, our focus shifts to academic readiness, life skills, and self-awareness. Students are guided through structured lessons, critical thinking exercises and real-world discussions. Regular assessments, leadership opportunities and exposure to smart class tools help prepare them for future academic and personal challenges.',
      image: '/primary-classes-arka-international-school-kolar.png',
      alt: "Secondary students gaining academic skills at Arka School"
    }
  ];

  setActive(id: string): void {
    if (this.activeSection !== id) {
      this.activeSection = id;
    }
  }

  clearActive(): void {
    this.activeSection = '';
  }

  getActiveSection() {
    return this.sections.find(s => s.id === this.activeSection);
  }

}
