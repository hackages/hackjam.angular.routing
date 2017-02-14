import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'bs-sidebar',
    templateUrl: 'sidebar.template.html'
})
export class SidebarComponent {
    @Input() navClosed;
    @Input() toggleSidebar;
    @Input('searchTerm') search;

    /**search(term){
        this.searchTerm.emit(term);
    }**/
}
