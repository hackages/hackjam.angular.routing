import { Component, Input } from '@angular/core';
import { Book } from '../../types/book';
import {Observable} from "rxjs";

@Component({
    selector: 'bs-books',
    templateUrl: 'books.template.html'
})
export class BooksComponent {
    @Input('dataSource') books: Book[];
    @Input() navClosed: Boolean;
}