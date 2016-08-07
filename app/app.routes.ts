import {provideRouter, RouterConfig } from '@angular/router';

import { HomePage } from './home-page.component';
//Import our app components here

const routes: RouterConfig = [
    
    //make home the default
    {
        path: '',
        component: HomePage
    },
];

export const appRouterProviders = [
    provideRouter(routes)
];