import {Routes, RouterModule } from '@angular/router';

import { HomePage } from './home-page.component';
import { ContactPage } from './contact-page.component';
//Import our app components here

const appRoutes: Routes = [
    
    //make home the default
    {    path: 'home',
        component: HomePage },

    {   path: '',
        pathMatch: 'full',
        redirectTo: 'home' },
            
    {   path: 'contact',
        component: ContactPage }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);