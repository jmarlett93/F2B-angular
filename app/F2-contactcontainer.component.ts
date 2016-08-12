import { Component } from '@angular/core';

import { SellerContactComponent } from './contact-form.component';

@Component ({
    selector: 'F2-contactcontainer',
    templateUrl: 'app/F2-contactcontainer.component.html',
    styleUrls: ['app/F2-contactcontainer.component.css'],
    directives: [SellerContactComponent]
})

export class F2ContactContainer { }