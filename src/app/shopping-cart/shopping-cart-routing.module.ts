import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ShoppingCartComponent } from './shopping-cart.component';
import { BeneficiaryGuard } from '../beneficiary.guard';
import { ApprovedGuard } from '../approved.guard';


const recipesRoutes: Routes = [
    { path: '', component: ShoppingCartComponent, canActivate: [AuthGuard,BeneficiaryGuard,ApprovedGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class ShoppingCartRoutingModule { }
