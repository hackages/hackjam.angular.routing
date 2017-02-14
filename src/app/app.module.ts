// Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { HeaderComponent } from './components/header/header.component';
import { SectionComponent } from './components/sections-gallery';
import { MenubarComponent  } from './components/menubar';
import { BooksComponent } from './components/books-gallery';
import { FilterCategoryComponent } from './components/filter-category';

// Services
import { AppService } from './services/app.service';
import {AppComponent} from "./app.component";
import AppRoutes from "./app.routes";
import {RouterModule} from "@angular/router";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {BookStoreComponent} from "./modules/bookstore/bookstore.component";



@NgModule({
  imports: [ BrowserModule, AppRoutes, RouterModule ],
  declarations: [
    AppComponent,
      DashboardComponent,
      BookStoreComponent,
    SidebarComponent,
    HeaderComponent,
    SectionComponent,
    MenubarComponent,
    BooksComponent,
    FilterCategoryComponent,
  ],
  bootstrap: [ AppComponent ],
  providers: [ AppService ],
})
export class AppModule { }
