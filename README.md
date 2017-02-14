## Todo: Features to implement in your app

 - Fix all the bugs before trying to implement any other features


## Architecture and communication between components (Brainstorming session)
We created 2 folders (dashboard and bookstore) but each component's template is a giant file with possible
multiple nested components. After our brainstorming session of yesterday, we came up with a list of components to build.

- Let's build all the components listed below inside the `components folder`
  - books-gallery
  - filter-category
  - header
  - menubar
  - sections-gallery
  - sidebar

NB: Use Input and Output decorators to communicate between components
You can find more information about Input/Output [here](https://angular.io/docs/ts/latest/cookbook/component-communication.html)


## Routing
- In the Dashboard, when clicking on the Bookstore, you should navigate to its page
  Add routes to your application:
   [
    { path: '/bookstore', component: BookStore },
    { path: '/computers', component: Computers },
    { path: '/photos', component: Photos },
    { path: '/automotive', component: Automotive },
    { path: '/sports', component: Sports },
   ]
   NB: You don't have to build every single component, just the Bookstore will suffice.

