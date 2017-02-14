import { Component } from '@angular/core';

@Component({
    selector: 'bs-header',
    templateUrl: 'header.template.html'
})
export class HeaderComponent {
   @Input() title: String;
}