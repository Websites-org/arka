import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

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
export class Home {
  activeIndex = 0;

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
  setActiveCard(id: number){
    this.activeIndex = id
  }
  card = [
    {
      title: 'Sport Games',
      description: 'Structured sports help students build fitness, teamwork, and discipline - essential for all-round development beyond the classroom.',
      icon: 'sports.png',
      label: 'Sport Games',
      image:'sports-image.png',
      color: '#DA251C'
    },
    {
      title: 'Music & Art',
      description: 'Creative programs in music and art encourage self-expression, boost confidence and enhance focus across all levels from pre-primary to secondary.',
      icon: 'music.png',
      label: 'Music & Art',
      image:'music-image.png',
      color: '#55A802'
    },
    {
      title: 'English Lessons',
      description: 'With a strong english medium foundation, our lessons strengthen reading, writing and communication skills for confident learners.',
      icon: 'medium.png',
      label: 'English Lessons',
      image:'medium-image.png',
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
    this.faqs = this.faqs.map((faq, i) => ({
      ...faq,
      open: i === index
    }));
  }
  stages = [
    {
      title: 'Pre-Primary',
      description: 'A joyful start to learning where children explore through play, stories, and activities. With caring teachers and engaging classrooms, every child builds confidence, creativity and early skills in a safe environment.',
      image: 'children.png',
      color: '#e63946',
      bgImage:'group-image.png'
    },
    {
      title: 'Primary',
      image: 'children.png',
      color: '#f77f00',
      bgImage:'group-image.png',
      description:'Our primary program blends academics with values. Children learn through hands-on lessons, teamwork, and smart class tools - building curiosity, responsibility, and a love for learning.'
    },
    {
      title: 'Higher Primary',
      image: 'children.png',
      color: '#fcbf49',
      bgImage:'group-image.png',
      description:'At this stage, students gain deeper understanding, better focus and stronger communication. We encourage independent thinking and balanced learning through projects, discussions and real-world application.'
    },
    {
      title: 'Secondary',
      image: 'children.png',
      color: '#aacc00',
      bgImage:'group-image.png',
      description:'Here, students prepare for the future with structured academics, self-discipline, and life skills. Through regular assessments and leadership exposure, they develop clarity, confidence, and readiness for the next step.'
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
}
