import { Component } from '@angular/core';
import { F2Navigator} from './F2-navigator.component';
import { FooterCredits } from './footer-credits.component';

@Component({
    selector: 'contact-page',
    templateUrl: 'app/contact-page.component.html',
    directives: [ F2Navigator, FooterCredits ]
})

export class ContactPage {
    buttonMessage = 'home';
    path = '/home';
 }