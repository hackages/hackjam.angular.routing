import {NgModule} from "@angular/core";
import BookstoreRoutes from "./bookstore.routes";
import {BookStoreComponent} from "./bookstore.component";
import {AppModule} from "../../app.module";
@NgModule({
    imports: [BookstoreRoutes, AppModule],
    declarations: [BookStoreComponent],
    exports: [BookStoreComponent]
})
export default class BookStoreModule {}
