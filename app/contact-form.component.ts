import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SellerContact } from './seller-contact';

@Component ({
    selector:'contact-form',
    templateUrl: 'app/contact-form.component.html',
    styleUrls: ['app/contact-form.component.css']
})

export class SellerContactComponent {
    
    model = new SellerContact('', '', '', '', '');

    submitted = false;
    active = true;
    onSubmit() { this.submitted = true;}
    
    newSeller() {
        this.model = new SellerContact('','','','','');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

}