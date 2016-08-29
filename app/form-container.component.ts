import { Component } from '@angular/core';
import { SellerContactComponent } from './contact-form.component';

@Component ({
    selector: 'FormContainer',
    templateUrl: 'app/form-container.component.html',
    styleUrls: ['app/form-container.component.css'],
    directives: [SellerContactComponent]
})

export class F2FormContainer { }