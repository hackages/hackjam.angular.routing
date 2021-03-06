"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var books_1 = require("./mocks/books");
var categories_1 = require("./mocks/categories");
var sections_1 = require("./mocks/sections");
var AppService = (function () {
    function AppService() {
    }
    AppService.prototype.getBooks = function () {
        return books_1.mockBooks;
    };
    AppService.prototype.getCategories = function () {
        return categories_1.categories;
    };
    AppService.prototype.getSections = function () {
        return sections_1.sections;
    };
    AppService = __decorate([
        core_1.Injectable()
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
