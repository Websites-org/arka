import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css'
})
export class AboutUs {
  constructor(private cdRef: ChangeDetectorRef) {}
  tabs = [
    'Whole School',
    'Administrative Office',
    'Pre-Primary',
    'Primary',
    'Higher Primary',
    'Secondary',
  ];
  selectedTab = 'Whole School';
  hoveredStaff: any = null;
  animateImage: boolean = false;

  staffList = [
    { name: 'Mrs. Keerthy L', designation: 'Principal', qualification: 'B.Sc, MA, B.Ed', category: 'Whole School', image: '/principal-image.svg' },
    { name: 'Mrs. Vanjakshi', designation: 'PGT', qualification: 'MA, B.Ed', category: 'Secondary', image: '/Vanjakshi Assistant Teacher.jpg' },
    { name: 'Mrs. Hamsaveni', designation: 'PGT', qualification: 'MA, B.Ed', category: 'Secondary', image: '/Hamsaveni Assistant Teacher.jpg' },
    { name: 'Ms. Bharathi B R', designation: 'PGT', qualification: 'MA, B.Ed', category: 'Secondary', image: '/Bharathi Assistant Teacher.jpg' },
    { name: 'Mrs. Dhanvini B K', designation: 'PGT', qualification: 'M.Sc, B.Ed', category: 'Secondary', image: '/Dhamini B K Assistant Teacher.jpeg' },
    { name: 'Mrs. Nagaveni', designation: 'TGT', qualification: 'B.A, D.Ed', category: 'Higher Primary', image: '/Nagaveni Assistant Teacher.jpg' },
    { name: 'Mr. G K Syed', designation: 'TGT', qualification: 'B.A, B.Ed', category: 'Higher Primary', image: '/G K Syed Assistant Teacher.jpg' },
    { name: 'Mrs. Bindushree', designation: 'TGT', qualification: 'B.E, B.Ed', category: 'Higher Primary', image: '/Bindhushree Assistant Teacher.jpg' },
    { name: 'Mrs. Nandini', designation: 'TGT', qualification: 'B.A, B.Ed', category: 'Higher Primary', image: '/Nandini Assistant Teacher.jpg' },
    { name: 'Mrs. Parvathamma', designation: 'TGT', qualification: 'B.A, B.Ed', category: 'Higher Primary', image: '/Parvathamma Assistant Teacher.jpg' },
    { name: 'Mrs. Radha C N', designation: 'TGT', qualification: 'B.A, B.Ed', category: 'Higher Primary', image: '/Radha Physical Teacher.jpeg' },
    { name: 'Mrs. Kalpana K', designation: 'TGT', qualification: 'B.A, B.Ed', category: 'Higher Primary', image: '/Kalpana K Assistant Teacher.jpeg' },
    { name: 'Mrs. Rekha', designation: 'PRT', qualification: 'D.Ed', category: 'Primary', image: '/Rekha Assistant Teacher.jpeg' },
    { name: 'Ms. Usha M', designation: 'PRT', qualification: 'B.Sc, MA', category: 'Primary', image: '/Usha M.jpeg' },
    { name: 'Ms. Arbia Fathima', designation: 'PRT', qualification: 'B.Com', category: 'Primary', image: '/Arbia Fathima Assistant Teacher.jpeg' },
    { name: 'Mrs. Madhu Singh', designation: 'PGT', qualification: 'M.Sc', category: 'Secondary', image: '/Madhu Singh Assistant Teacher.jpg' },
    { name: 'Ms. Rini Priyanka S', designation: 'PRT', qualification: 'MTT', category: 'Primary', image: '/Rini Priyanka Assistant Teacher.jpeg' },
    { name: 'Ms. Monica M', designation: 'PRT', qualification: 'MTT', category: 'Primary', image: '/Monica M Assistant Teacher.jpeg' },
    { name: 'Mr. Navichandran', designation: 'PGT', qualification: 'M.Sc', category: 'Secondary', image: '/Navichandran Assistant Teacher.jpeg' },
    { name: 'Ms. Shalini A', designation: 'PRT', qualification: 'MTT', category: 'Primary', image: '/Shalini Assistant Teacher.jpeg' },
    { name: 'Ms. Suganya P', designation: 'PRT', qualification: 'NTT', category: 'Primary', image: '/Suganya P Assistant Teacher.jpg' },
    { name: 'Mr. Nagesh', designation: 'Karate', qualification: 'D. Mech', category: 'Whole School', image: '/Nagesh Karate Teacher.jpeg' },
    { name: 'Mr. Shridhar', designation: 'Dance', qualification: '-', category: 'Whole School', image: '/Shridhar Dance Teacher.jpeg' }
  ];
  

  get filteredStaffList() {
    if (this.selectedTab === 'Whole School') return this.staffList;
    return this.staffList.filter(
      (staff) => staff.category === this.selectedTab
    );
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.hoveredStaff = null;
  }
  setHoveredStaff(staff: any) {
    this.hoveredStaff = staff;
  
    // Restart animation
    this.animateImage = false;
    setTimeout(() => {
      this.animateImage = true;
    }, 0);
  }
  showImages = false;

 

  ngOnInit(): void {
    // Ensure the animation runs right after view loads
    setTimeout(() => {
      this.showImages = true;
      this.cdRef.detectChanges();  // manually trigger change detection
    }, 0); // show immediately
    AOS.init({
      duration: 1000, // duration of animation in ms
      once: false
    });
  }
  
}
