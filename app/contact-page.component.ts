import { Component } from '@angular/core';
import { F2Navigator} from './F2-navigator.component';
import { FooterCredits } from './footer-credits.component';
import { SellerContactComponent } from './contact-form.component';
import { F2ContactContainer} from './F2-contactcontainer.component';
import { F2FormContainer } from './form-container.component';

@Component({
    selector: 'contact-page',
    templateUrl: 'app/contact-page.component.html',
    directives: [ F2Navigator, FooterCredits, F2ContactContainer, F2FormContainer, SellerContactComponent ]
})

export class ContactPage {
    link:string;
    
    constructor() {
        this.link = "home";    
    }
 }