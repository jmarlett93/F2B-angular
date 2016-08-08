import { Component } from '@angular/core';
import { F2Navigator} from 'app/F2-navigator.component';
import { F2Branding } from 'app/F2-branding.component';
import { F2SiteInfo } from 'app/F2-siteinfo.component';
import { FooterCredits } from 'app/footer-credits.component';

@Component ({
    selector: 'home-page',
    templateUrl: 'app/home-page.component.html',
    directives: [F2Navigator, F2Branding, F2SiteInfo, FooterCredits ]
})

export class HomePage { }