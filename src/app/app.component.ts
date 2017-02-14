import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
    <bs-header [appTitle]="title"></bs-header>
    <router-outlet></router-outlet>
`
})
export class AppComponent {
    title = "Amazon by @Hackages";
}