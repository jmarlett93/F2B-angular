import { Component }       from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HomePage } from './home-page.component';

@Component({
    selector:'app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [HomePage],
    providers: [
        
        ]
})

export class AppComponent{
    title = "Sell Your House For Cash | Fixin' To Buy LLC ";

}