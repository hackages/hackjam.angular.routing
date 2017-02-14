import {DashboardComponent} from "./dashboard.component";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
const Route = [
    {path: '', component: DashboardComponent}
];

@NgModule({
    imports: [RouterModule.forChild(Route)],
    exports: [RouterModule]
})
export default class Routes {}
