import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LightningFastDealComponent } from './lightning-fast-deal/lightning-fast-deal.component';
import { TrendingComponent } from './trending/trending.component';
import { AuthGuard } from '../auth.guard';
import { BeneficiaryGuard } from '../beneficiary.guard';
import { ProductComponent } from './product.component';
import { VerificationComponent } from './verification/verification.component';
import { FormComponent } from './form/form.component';
import { ApprovedGuard } from '../approved.guard';


const recipesRoutes: Routes = [
  {path:'',component:ProductComponent,children:[
  { path: 'all', component: AllComponent, canActivate: [AuthGuard, BeneficiaryGuard,ApprovedGuard] },
  { path:'verification',component:VerificationComponent,canActivate:[AuthGuard,BeneficiaryGuard]},
  { path:'ngoform',component:FormComponent,canActivate:[AuthGuard,BeneficiaryGuard]},
  { path: 'detail/:id', component: ProductDetailComponent, canActivate: [AuthGuard, BeneficiaryGuard,ApprovedGuard] },
  { path: 'lightning', component: LightningFastDealComponent, canActivate: [AuthGuard, BeneficiaryGuard] },
  { path: 'trending', component: TrendingComponent, canActivate: [AuthGuard, BeneficiaryGuard] }
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [
  ]
})
export class ProductRoutingModule { }
