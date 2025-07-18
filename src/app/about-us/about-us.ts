import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css'
})
export class AboutUs {
  constructor(private cdRef: ChangeDetectorRef, private titleService: Title, private metaService: Meta) { }

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
    { 
      name: 'Mrs. Keerthy L', 
      designation: 'Principal', 
      qualification: 'B.Sc, MA, B.Ed', 
      category: 'Whole School', 
      image: '/keerthy-principal-arka-international-school-kolar.svg',
      alt : "Mrs. Keerthy L, Principal at Arka International School Kolar"
    },
    { 
      name: 'Mrs. Vanjakshi', 
      designation: 'PGT', 
      qualification: 'MA, B.Ed', 
      category: 'Secondary', 
      image: '/vanjakshi-pgt-arka-school-kolar.jpg',
      alt : "Mrs. Vanjakshi, PGT at Arka International School Kolar"
    },
    { 
      name: 'Mrs. Hamsaveni', 
      designation: 'PGT', 
      qualification: 'MA, B.Ed', 
      category: 'Secondary', 
      image: '/hamsaveni-pgt-arka-school-kolar.jpg',
      alt : "Mrs. Hamsaveni, PGT at Arka International School Kolar"
    },
    { 
      name: 'Ms. Bharathi B R', 
      esignation: 'PGT', 
      qualification: 'MA, B.Ed', 
      category: 'Secondary', 
      image: '/bharathi-pgt-arka-school-kolar.jpg',
      alt : "Ms. Bharathi B R, PGT at Arka International School Kolar"
    },
    { 
      name: 'Mrs. Dhanvini B K', 
      designation: 'PGT', 
      qualification: 'M.Sc, B.Ed', 
      category: 'Secondary', 
      image: '/dhanvini-pgt-arka-school-kolar.jpeg',
      alt : "Mrs. Dhanvini B K, PGT at Arka International School Kolar"
    },
    { 
      name: 'Mrs. Nagaveni', 
      designation: 'TGT', 
      qualification: 'B.A, D.Ed', 
      category: 'Higher Primary', 
      image: '/nagaveni-tgt-arka-school-kolar.jpg',
      alt : "Mrs. Nagaveni, TGT at Arka International School Kolar"
    },
    { name: 'Mr. G K Syed', 
      designation: 'TGT', 
      qualification: 'B.A, B.Ed', 
      category: 'Higher Primary', 
      image: '/gk-syed-tgt-arka-school-kolar.jpg',
      alt : "Mr. G K Syed, TGT at Arka International School Kolar"
    },
    { 
      name: 'Mrs. Bindushree', 
      designation: 'TGT', 
      qualification: 'B.E, B.Ed', 
      category: 'Higher Primary', 
      image: '/bindushree-tgt-arka-school-kolar.jpg',
      alt : "	Mrs. Bindushree, TGT at Arka International School Kolar"
    },
    { 
      name: 'Mrs. Nandini', 
      designation: 'TGT', 
      qualification: 'B.A, B.Ed', 
      category: 'Higher Primary', 
      image: '/nandini-tgt-arka-school-kolar.jpg',
      alt : "Mrs. Nandini, TGT at Arka International School Kolar" 
    },
    { 
      name: 'Mrs. Parvathamma', 
      designation: 'TGT', 
      qualification: 'B.A, B.Ed', 
      category: 'Higher Primary', 
      image: '/parvathamma-tgt-arka-school-kolar.jpg',
      alt : "Mrs. Parvathamma, TGT at Arka International School Kolar" 
    },
    { 
      name: 'Mrs. Radha C N', 
      designation: 'TGT', 
      qualification: 'B.A, B.Ed', 
      category: 'Higher Primary', 
      image: '/radha-physical-teacher-arka-school-kolar.jpeg',
      alt : "Mrs. Radha C N, TGT at Arka International School Kolar" 
    },
    { 
      name: 'Mrs. Kalpana K', 
      designation: 'TGT', 
      qualification: 'B.A, B.Ed', 
      category: 'Higher Primary', 
      image: '/kalpana-k-tgt-arka-school-kolar.jpeg',
      alt : "Mrs. Kalpana K, TGT at Arka International School Kolar" 
    },
    { 
      name: 'Mrs. Rekha', 
      designation: 'PRT', 
      qualification: 'D.Ed', 
      category: 'Primary', 
      image: '/rekha-prt-arka-school-kolar.jpeg',
      alt : "Mrs. Rekha, PRT at Arka International School Kolar" 
    },
    { 
      name: 'Ms. Usha M', 
      designation: 'PRT', 
      qualification: 'B.Sc, MA', 
      category: 'Primary', 
      image: '/usha-m-prt-arka-school-kolar.jpeg',
      alt : "Ms. Usha M, PRT at Arka International School Kolar" 
    },
    { 
      name: 'Ms. Arbia Fathima', 
      designation: 'PRT', 
      qualification: 'B.Com', 
      category: 'Primary', 
      image: '/arbia-fathima-prt-arka-school-kolar.jpeg',
      alt : "Ms. Arbia Fathima, PRT at Arka International School Kolar" 
    },
    { 
      name: 'Mrs. Madhu Singh', 
      designation: 'PGT', 
      qualification: 'M.Sc', 
      category: 'Secondary', 
      image: '/madhu-singh-pgt-arka-school-kolar.jpg',
      alt : "Mrs. Madhu Singh, PGT at Arka International School Kolar" 
    },
    { 
      name: 'Ms. Rini Priyanka S', 
      designation: 'PRT', 
      qualification: 'MTT', 
      category: 'Primary', 
      image: '/rini-priyanka-prt-arka-school-kolar.jpeg',
      alt : "Ms. Rini Priyanka S, PRT at Arka International School Kolar" 
    },
    { 
      name: 'Ms. Monica M', 
      designation: 'PRT', 
      qualification: 'MTT', 
      category: 'Primary', 
      image: '/monica-m-prt-arka-school-kolar.jpeg',
      alt : "Ms. Monica M, PRT at Arka International School Kolar" 
    },
    { 
      name: 'Mr. Navichandran', 
      designation: 'PGT', 
      qualification: 'M.Sc', 
      category: 'Secondary', 
      image: '/navichandran-pgt-arka-school-kolar.jpeg',
      alt : "Mr. Navichandran, PGT at Arka International School Kolar" 
    },
    { 
      name: 'Ms. Shalini A', 
      designation: 'PRT', 
      qualification: 'MTT', 
      category: 'Primary', 
      image: '/shalini-a-prt-arka-school-kolar.jpeg',
      alt : "Ms. Shalini A, PRT at Arka International School Kolar" 
    },
    { 
      name: 'Ms. Suganya P', 
      designation: 'PRT', 
      qualification: 'NTT', 
      category: 'Primary', 
      image: '/suganya-p-prt-arka-school-kolar.jpg',
      alt : "Ms. Suganya P, PRT at Arka International School Kolar" 
    },
    { 
      name: 'Mr. Nagesh', 
      designation: 'Karate', 
      qualification: 'D. Mech', 
      category: 'Whole School', 
      image: '/nagesh-karate-teacher-arka-school-kolar.jpeg',
      alt : "Mr. Nagesh, Karate Teacher at Arka International School Kolar" 
    },
    { 
      name: 'Mr. Shridhar', 
      designation: 'Dance', 
      qualification: '-', 
      category: 'Whole School', 
      image: '/shridhar-dance-teacher-arka-school-kolar.jpeg',
      alt : "Mr. Shridhar, Dance Teacher at Arka International School Kolar" 
    }
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

    this.titleService.setTitle('Contact Arka - Best English Medium School in Kolar');

    this.metaService.updateTag({
      name: 'description',
      content: 'Get in touch with the best school in Kolar offering pre-primary to secondary education with caring teachers & support.'
    });
  }

}
