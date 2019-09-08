import { LoginComponent } from "./login/login.component";
import { FeedsComponent } from "./feeds/feeds.component";
import { CreatorComponent } from "./creator/creator.component";
import { AllProductsComponent } from "./all-products/all-products.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgProgressModule } from "ngx-progressbar";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../Core/core.module";
import { HttpService } from "../Service/http.service";
import { AdminService } from "../Service/admin.service";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgoComponent } from './ngo/ngo.component';

@NgModule({
    declarations:[
        AdminComponent,
        LoginComponent,
        FeedsComponent,
        CreatorComponent,
        AllProductsComponent,
        DashboardComponent,
        NgoComponent  
    ],
    imports:[
        CommonModule,
        FormsModule,
        NgProgressModule,
        RouterModule,
        CoreModule,
        AdminRoutingModule
    ],
    providers: [HttpService,AdminService]
})
export class AdminModule{}