import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Category } from '../../types/category';

@Component({
    selector: 'bs-filter-category',
    templateUrl: 'filter-category.template.html'
})
export class FilterCategoryComponent {
    @Input('dataSource') categories: Category[];
    @Output('changeCategory') changeCat: EventEmitter<Category> = new EventEmitter<Category>();

    changeCategory(cat: Category){
        this.changeCat.emit(cat);
    }
}