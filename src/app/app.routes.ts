import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Learning } from './learning/learning';
import { Home } from './home/home';
import { Admission } from './admission/admission';
import { Facility } from './facility/facility';
import { AboutUs } from './about-us/about-us';

export const routes: Routes = [
        { path: '', component: Home },
        { path: 'contact', component: Contact },
        { path: 'curriculum', component: Learning },
        { path: 'admission', component: Admission },
        { path: 'facility', component: Facility },
        { path: 'about-us', component: AboutUs }, // Assuming Home is used for About Us as well
        { path: '**', redirectTo: '' }

];
