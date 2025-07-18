import { Component, QueryList, ViewChildren, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as AOS from 'aos';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  animations: [
    trigger('slideToggle', [
      state('open', style({ height: '*', opacity: 1, paddingTop: '12px' })),
      state('closed', style({ height: '0px', opacity: 0, paddingTop: '0px' })),
      transition('open <=> closed', [animate('300ms ease')])
    ])
  ]
})
export class Home implements AfterViewInit {
  @ViewChild('aboutSection') aboutSection!: ElementRef;

  scrollToAbout(): void {
    this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  constructor(private titleService: Title, private metaService: Meta) { }

  activeIndex: number | null = 0;

  cards = [
    {
      id: 'preprimary',
      title: 'Pre-Primary',
      content: 'Our pre-primary program blends academics with fun. Children learn through hands-on lessons, teamwork, art and music.',
      image: 'assets/images/preprimary.jpg',
      color: '#e31c25',
    },
    {
      id: 'primary',
      title: 'Primary',
      content: '',
      image: 'assets/images/primary.jpg',
      color: '#016fc1',
    },
    {
      id: 'higher-primary',
      title: 'Higher Primary',
      content: '',
      image: 'assets/images/higher-primary.jpg',
      color: '#f7c708',
    },
    {
      id: 'secondary',
      title: 'Secondary',
      content: '',
      image: 'assets/images/secondary.jpg',
      color: '#28a745',
    },
  ];

  activeCardId = 'preprimary';

  setActive(id: string) {
    this.activeCardId = id;
  }
  setActiveCard(index: number): void {
    this.activeIndex = index;
    this.hoveredIndex = null; // clear hover when clicked
  }
  card = [
    {
      title: 'Sport Games',
      description: 'Structured sports help students build fitness, teamwork, and discipline - essential for all-round development beyond the classroom.',
      icon: 'arka-school-sports-activities-kolar.png',
      alt: "Sports activities at Arka School for fitness and teamwork",
      label: 'Sport Games',
      image: 'arka-school-physical-education-kolar.png',
      color: '#DA251C'
    },
    {
      title: 'Music & Art',
      description: 'Creative programs in music and art encourage self-expression, boost confidence and enhance focus across all levels from pre-primary to secondary.',
      icon: 'arka-school-music-art-classes-kolar.png',
      alt: "Music and art classes at Arka International School Kolar",
      label: 'Music & Art',
      image: 'creative-music-art-classes-arka-school-kolar.png',
      color: '#55A802'
    },
    {
      title: 'English Lessons',
      description: 'With a strong english medium foundation, our lessons strengthen reading, writing and communication skills for confident learners.',
      icon: 'english-medium-lessons-arka-school-kolar.png',
      alt: "English lessons at Arka School to build language skills",
      label: 'English Lessons',
      image: 'language-learning-english-class-arka-school-kolar.png',
      color: '#2996BD'
    }
  ];
  faqs = [
    {
      question: 'Arka international school where located in bangalore ?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...',
      open: true
    },
    {
      question: 'Arka international school where located in bangalore ?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ’s standard dummy text ever since Lorem Ipsum is simply dummy text.',
      open: false
    },
    {
      question: 'Arka international school where located in bangalore ?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since Lorem Ipsum is simply dummy text.',
      open: false
    },
    {
      question: 'Arka international school where located in bangalore ?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since Lorem Ipsum is simply dummy text.',
      open: false
    }
  ];
  toggle(index: number) {
    this.faqs.forEach((faq, i) => {
      faq.open = i === index ? !faq.open : false;
    });

    this.calculateHeights();
  }
  stages = [
    {
      title: 'Pre-Primary',
      description: 'A joyful start to learning where children explore through play, stories, and activities. With caring teachers and engaging classrooms, every child builds confidence, creativity and early skills in a safe environment.',
      image: 'indoor-group-activity-arka-school-kolar.png',
      color: '#e63946',
      bgImage: 'teachers-students-arka-international-school-kolar.png',
      alt: "Pre-primary kids at Arka School Kolar exploring joyful learning",
      alt1: "Teachers guiding young learners at Arka International School Kolar"
    },
    {
      title: 'Primary',
      image: 'indoor-group-activity-arka-school-kolar.png',
      color: '#f77f00',
      bgImage: 'teachers-students-arka-international-school-kolar.png',
      alt: "Primary students learning through activities at Arka School Kolar",
      alt1: "Smart class and group learning at Arka International School Kolar",
      description: 'Our primary program blends academics with values. Children learn through hands-on lessons, teamwork, and smart class tools - building curiosity, responsibility, and a love for learning.'
    },
    {
      title: 'Higher Primary',
      image: 'indoor-group-activity-arka-school-kolar.png',
      color: '#fcbf49',
      bgImage: 'teachers-students-arka-international-school-kolar.png',
      alt: "Higher primary students doing teamwork at Arka School Kolar",
      alt1: "Teachers encouraging active learning at Arka School Kolar",
      description: 'At this stage, students gain deeper understanding, better focus and stronger communication. We encourage independent thinking and balanced learning through projects, discussions and real-world application.'
    },
    {
      title: 'Secondary',
      image: 'indoor-group-activity-arka-school-kolar.png',
      color: '#aacc00',
      bgImage: 'teachers-students-arka-international-school-kolar.png',
      alt: "Secondary students focused on academics at Arka School Kolar",
      alt1: "Arka School students gaining life skills and discipline at Kolar",
      description: 'Here, students prepare for the future with structured academics, self-discipline, and life skills. Through regular assessments and leadership exposure, they develop clarity, confidence, and readiness for the next step.'
    }
  ];
  showAll = false;

  missionPoints: string[] = [
    'To provide a complete holistic education for the all-round development of the student with positive attitude.',
    'To encourage students to excel in their respective potential fields.',
    'To bring out the best in every child and create awareness to make them competitive in the society.',
    'Nurturing and moulding students for empowerment.',
    'Inculcate leadership skills, develop lateral thinking and trigger creativity.',
    'Facilitate the development of every child into a socially responsible citizen.'
  ];

  getVisiblePoints(): string[] {
    return this.showAll ? this.missionPoints : this.missionPoints.slice(0, 2);
  }

  toggleReadMore(event: Event): void {
    event.preventDefault(); // prevent page jump from anchor tag
    this.showAll = !this.showAll;
  }
  bodyHeights: number[] = [];

  @ViewChildren('bodyWrapper') bodyWrappers!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.calculateHeights();
  }
  private calculateHeights(): void {
    setTimeout(() => {
      this.bodyHeights = this.bodyWrappers.map(
        (el) => el.nativeElement.scrollHeight
      );
    });
  }
  ngOnInit(): void {
    AOS.init({
      duration: 1000, // duration of animation in ms
      once: false
    });

    this.titleService.setTitle('Arka International School - Best English Medium School in Kolar');

    this.metaService.updateTag({
      name: 'description',
      content: 'Top English medium school in Kolar with pre-primary to secondary classes, smart class and co-curricular activities.'
    });
  }
  hoveredIndex: number | null = null;


  setHoveredCard(index: number): void {
    this.hoveredIndex = index;
    this.activeIndex = null; // clear click when hovered
  }

  clearHoveredCard(): void {
    this.hoveredIndex = null;
  }
}
