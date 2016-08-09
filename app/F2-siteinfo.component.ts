import { Component } from '@angular/core';

import { SellerContactComponent } from './contact-form.component';

@Component ({
    selector: 'F2-siteinfo',
    templateUrl: 'app/F2-siteinfo.component.html',
    styleUrls: ['app/F2-siteinfo.component.css'],
    directives: [SellerContactComponent]
})

export class F2SiteInfo { 
    phonenumber = "XXX-XXX-XXXX";
    email = "Youremail@Example.com"
}