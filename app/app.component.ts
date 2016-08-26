import { Component }       from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SellerContactComponent } from './contact-form.component';
import { HomePage } from './home-page.component';

@Component({
    selector:'app',
    inputs: ['linkName'],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    //precompile: [HomePage],
    providers: [ SellerContactComponent ]
})

export class AppComponent{
    title = "Sell Your House For Cash | Fixin' To Buy LLC ";
    linkName : string ;
}