import {NgModule} from "@angular/core";
import DashboardRoutes from "./dashboard.routes"
import {DashboardComponent} from "./dashboard.component";
import {AppModule} from "../../app.module";
@NgModule({
    imports: [DashboardRoutes, AppModule],
    declarations: [DashboardComponent]
})
export default class DashboardModule {}
