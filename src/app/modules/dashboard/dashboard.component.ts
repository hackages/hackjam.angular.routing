import { AppService } from './../../services/app.service';
import { Component } from '@angular/core';
import { Section } from '../../types/section';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.template.html',
})
export class DashboardComponent {
    title: string = "Amazon by @Hackages!";
    sections: Section [];

    constructor(private appService: AppService){
        this.sections = this.appService.getSections();
    }
}