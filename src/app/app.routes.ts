import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {BookStoreComponent} from "./modules/bookstore/bookstore.component";

const Route = [
    {path: '', component: DashboardComponent},
    {path: 'books', component: BookStoreComponent},
    {path: 'books/:cat', component: BookStoreComponent}

];

export default RouterModule.forRoot(Route);