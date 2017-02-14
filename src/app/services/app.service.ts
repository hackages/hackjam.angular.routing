import { Injectable } from '@angular/core';

// Mock Data
import { categories } from './mocks/categories';
import { mockBooks } from './mocks/books';
import { sections } from './mocks/sections';

// Types
import { Book } from '../types/book';
import { Category } from '../types/category';
import { Section } from '../types/section';

@Injectable()
export class AppService {
  getBooks(): Book[] {
      return mockBooks;
  }

  getCategories(): Category[] {
      return categories;
  }

  getSections(): Section[] {
      return sections; 
  }
}