import {provideRouter, RouterConfig } from '@angular/router';

//Import our app components here

const routes: RouterConfig = [
    
    //make home the default
    {
        path: '',
        redirectTo: 'F2B-main',
        pathMatch: 'full'
    },
];

export const appRouterProviders = [
    provideRouter(routes)
];