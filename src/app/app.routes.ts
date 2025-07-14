import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Learning } from './learning/learning';
import { Home } from './home/home';

export const routes: Routes = [
        { path: '', component: Home},
        { path: 'contact', component: Contact },
        { path: 'curriculum', component: Learning },
        { path: '**', redirectTo: '' }
      
];
