## Todo: Features to implement in your app

 - Fix all the bugs before trying to implement any other features

## Hints
- ActivedRoute
- [routerLink]="yourPath" - [https://angular.io/docs/ts/latest/api/router/index/RouterLink-directive.html](https://angular.io/docs/ts/latest/api/router/index/RouterLink-directive.html)



## [Routing](https://angular.io/docs/ts/latest/guide/router.html)
- In the Dashboard, when clicking on the Bookstore, you should navigate to its page
  Add routes to your application inside `app.routes.js`:
  ```javascript
   const Route = [
       {path: '', component: DashboardComponent},
       {path: 'books', component: BookStoreComponent},
       {path: 'books/:category', component: BookStoreComponent}
   ];

   const myModule = RouterModule.forRoot(Route);
  ```
