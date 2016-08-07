import { Component }       from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector:'F2B-main',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        
        ]
})

export class AppComponent{
    title = "Sell Your House For Cash | Fixin' To Buy LLC ";
}