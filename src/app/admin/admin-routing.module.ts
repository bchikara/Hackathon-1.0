import { AdminComponent } from "./admin.component";
import { Routes, RouterModule } from "@angular/router";
import { AllProductsComponent } from "./all-products/all-products.component";
import { AuthGuard } from "../auth.guard";
import { LoginComponent } from "./login/login.component";
import { FeedsComponent } from "./feeds/feeds.component";
import { CreatorComponent } from "./creator/creator.component";
import { NgModule } from "@angular/core";
import { AdminGuard } from "../admin.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgoComponent } from "./ngo/ngo.component";

const recipesRoutes: Routes = [
    {path:'',component:AdminComponent,children:[
    {path:'dashboard',component:DashboardComponent,canActivate:[AdminGuard]},
    {path:'ngo/:id',component:NgoComponent,canActivate:[AdminGuard]},
    { path: 'allproduct', component: AllProductsComponent, canActivate: [AdminGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'feeds', component: FeedsComponent, canActivate: [AdminGuard] },
    { path: 'modulecreator', component: CreatorComponent,canActivate:[AdminGuard]}
    ]},
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(recipesRoutes)
    ],
    providers: [
    ]
  })
  export class AdminRoutingModule { }
  