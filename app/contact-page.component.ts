import { Component } from '@angular/core';
import { F2Navigator} from './F2-navigator.component';
import { FooterCredits } from './footer-credits.component';
import { SellerContactComponent } from './contact-form.component';

@Component({
    selector: 'contact-page',
    templateUrl: 'app/contact-page.component.html',
    styleUrls: ['app/contact-page.component.css'],
    directives: [ F2Navigator, FooterCredits, SellerContactComponent ]
})

export class ContactPage {
    link:string;
    
    constructor() {
        this.link = "home";    
    }
 }