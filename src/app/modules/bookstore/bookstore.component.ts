import { Component } from '@angular/core';
import { Book } from '../../types/book';
import { Category } from '../../types/category';
import { AppService } from './../../services/app.service';


@Component({
  selector: 'bookstore',
  templateUrl: 'bookstore.template.html'
})
export class BookStoreComponent {
  books: Book[];
  categories: Category[];
  navClosed: boolean = true;
  title: string = "Bookstore by Hackages";
  initialData: { books: Book[], categories: Category[] } = { books: [], categories: [] };

  constructor(private appService: AppService){}

  public ngOnInit() {
    // Get the books
    this.books = this.appService.getBooks();
    this.initialData.books = this.books;
    // Get the categories
    this.categories = this.appService.getCategories();
    this.initialData.categories = this.categories;
  }

  getBookDetail(): void {
    console.log('Will be implemented in the next section');
  }

  changeCategory(selectedCategory: Category): void {
      this.categories = this.categories.map(category => {
          category.selected = category.name === selectedCategory.name;
        return category;
    });

    this.filterBooks(selectedCategory);
  }

  filterBooks(category: Category): void {
    if(category.name === "All") {
      this.books = this.initialData.books;
    } else {
      this.books = this.initialData.books.filter(book => book.category === category.name);
    }
  }

  search(searchTerm: string): void {
    searchTerm = searchTerm.toLowerCase();
    this.books = this.initialData.books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
            book.category.toLocaleLowerCase().includes(searchTerm));
  }

  toggleSidebar(): void {
    this.navClosed = !this.navClosed;
  }
}