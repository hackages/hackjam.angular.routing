import {RouterModule} from "@angular/router";
import DashboardModule from "./modules/dashboard/dashboard.module";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {BookStoreComponent} from "./modules/bookstore/bookstore.component";

//const Route = [
//    {path: '', loadChildren: 'app/modules/dashboard/dashboard.module'},
//    {path: 'books', loadChildren: 'app/modules/bookstore/bookstore.module'}
//];

const Route = [
    {path: '', component: DashboardComponent},
    {path: 'books', component: BookStoreComponent},
    {path: 'books/:cat', component: BookStoreComponent}

];

export default RouterModule.forRoot(Route);