import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Learning } from './learning/learning';
import { Home } from './home/home';
import { Admission } from './admission/admission';
import { Facility } from './facility/facility';

export const routes: Routes = [
        { path: '', component: Home },
        { path: 'contact', component: Contact },
        { path: 'curriculum', component: Learning },
        { path: 'admission', component: Admission },
        { path: 'facility', component: Facility },
        { path: '**', redirectTo: '' }

];
