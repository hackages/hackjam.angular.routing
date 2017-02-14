import {Component, Input} from '@angular/core';

@Component({
    selector: 'bs-menubar-placeholder',
    templateUrl: 'menubar.template.html',
})
export class MenubarComponent {
    @Input() dataSource;
}