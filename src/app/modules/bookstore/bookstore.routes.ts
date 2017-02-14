import {BookStoreComponent} from "./bookstore.component";
import {RouterModule} from "@angular/router";
const Routes = [
    {path: '', component: BookStoreComponent},
    {path: ':cat', component: BookStoreComponent}
];

export default RouterModule.forChild(Routes);
