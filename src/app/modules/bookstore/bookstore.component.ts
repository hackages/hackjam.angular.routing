import { Component } from '@angular/core';
import { Book } from '../../types/book';
import { Category } from '../../types/category';
import { AppService } from './../../services/app.service';
import { ActivatedRoute } from "@angular/router";


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

  constructor(private appService: AppService, private route: ActivatedRoute){
  }

  private ngAfterViewInit(){
    this.route.params.subscribe(({cat: name}) => {
      console.log();
      if(name){
        this.changeCategory({name, selected: true});
      }
    })
  }

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
          category.selected = category.name.toLowerCase() === selectedCategory.name.toLowerCase();
        return category;
    });

    this.filterBooks(selectedCategory);
  }

  filterBooks(category: Category): void {
    if(category.name.toLowerCase() === "all") {
      this.books = this.initialData.books;
    } else {
      this.books = this.initialData.books.filter(book => book.category.toLowerCase() === category.name.toLowerCase());
    }
  }

  search = (searchTerm) => {
    searchTerm = searchTerm.toLowerCase();
    this.books = this.initialData.books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
            book.category.toLocaleLowerCase().includes(searchTerm));
  }

  toggleSidebar = () => {
    this.navClosed = !this.navClosed;
  }
}