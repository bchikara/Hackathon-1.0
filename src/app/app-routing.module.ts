import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from "./Extra/404/404.component";
import { SocialfeedsComponent } from "./socialfeeds/socialfeeds.component";
import { AuthGuard } from "./auth.guard";
import { AgmComponent } from "./agm/agm.component";
import { SocialfeedsformComponent } from "./socialfeedsform/socialfeedsform.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',loadChildren:'./homepage/homepage.module#HomePageModule'},
  {path:'product',loadChildren:'./product/product.module#ProductModule'},
  {path:'Cart',loadChildren:'./shopping-cart/shopping-cart.module#ShoppingCartModule'},
  {path:'my',loadChildren:'./Profile/profile.module#ProfileModule'},
  {path:'donor',loadChildren:'./Donor/donor.module#DonorModule'},
  {path:'check-out',loadChildren:'./check-out/check-out.module#CheckOutModule'},
  {path:'user',loadChildren:'./Authentication/authentication.module#AuthenticateModule'},
  // {path:'betterpledge',loadChildren:'./Extra/extra.module#ExtraModule'},
  {path:'social/feeds',component:SocialfeedsComponent},
  {path:'social/addfeeds',component:SocialfeedsformComponent,canActivate:[AuthGuard]},
  {path:'admin',loadChildren:'./admin/admin.module#AdminModule'},
  {path:'map',component:AgmComponent,canActivate:[AuthGuard]},
  {path:'**',component:NotFoundComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}