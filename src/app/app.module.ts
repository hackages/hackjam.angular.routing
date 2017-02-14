// Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { DashboardComponent }  from './modules/dashboard';
import { BookStoreComponent  }  from './modules/bookstore';
import { HeaderComponent } from './components/header/header.component';
import { SectionComponent } from './components/sections-gallery';
import { MenubarComponent  } from './components/menubar';
import { BooksComponent } from './components/books-gallery';
import { FilterCategoryComponent } from './components/filter-category';

// Services
import { AppService } from './services/app.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    DashboardComponent,
    BookStoreComponent,
    HeaderComponent,
    SectionComponent,
    MenubarComponent,
    BooksComponent,
    FilterCategoryComponent,
  ],
  bootstrap: [ BookStoreComponent ],
  providers: [ AppService ],
})
export class AppModule { }