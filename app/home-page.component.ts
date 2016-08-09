import { Component } from '@angular/core';
import { F2Navigator} from './F2-navigator.component';
import { F2Branding } from './F2-branding.component';
import { F2SiteInfo } from './F2-siteinfo.component';
import { SellerContactComponent } from './contact-form.component';
import { FooterCredits } from './footer-credits.component';

@Component ({
    selector: 'home-page',
    templateUrl: 'app/home-page.component.html',
    directives: [F2Navigator, F2Branding, F2SiteInfo, FooterCredits, SellerContactComponent ]
})

export class HomePage { }