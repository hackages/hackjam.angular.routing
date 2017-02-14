import { Component, Input } from '@angular/core';
import { Section } from '../../types/section';

@Component({
    selector: 'bs-section',
    templateUrl: 'section.template.html'
})
export class SectionComponent {
    @Input('dataSource') sections;
}