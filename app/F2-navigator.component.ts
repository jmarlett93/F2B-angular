import { Component }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'F2-navigator',
    inputs: ['linkName'],
    templateUrl: 'app/F2-navigator.component.html',
    styleUrls: ['app/F2-navigator.component.css'],
    directives: [ROUTER_DIRECTIVES],

})

export class F2Navigator {
    linkName : string ;
    linkProperty: string;
    
 }