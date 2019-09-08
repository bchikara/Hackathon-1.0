import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from './Service/http.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticateService } from './Service/authentication.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './Service/token-interceptor.service';
import { CoreModule } from './Core/core.module';
import { ShoppingCartService } from './Service/shopping-cart.service';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { OrderService } from './Service/order.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DonorGuard } from './donor.guard';
import { BeneficiaryGuard } from './beneficiary.guard';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './Extra/404/404.component';
import { NgProgressModule } from 'ngx-progressbar';
import { SocialfeedsComponent } from './socialfeeds/socialfeeds.component';
import { AdminGuard } from './admin.guard';
import { ApprovedGuard } from './approved.guard';
import { AgmComponent } from './agm/agm.component';

import { AgmCoreModule } from '@agm/core';
import { SocialfeedsformComponent } from './socialfeedsform/socialfeedsform.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SocialfeedsComponent,
    AgmComponent,
    SocialfeedsformComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAlAS-bx-M16bI-vm8RUDIE3z02MdhWEFQ'
    }),
    RouterModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    NgProgressModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],

  providers: [HttpService, OrderService, AuthenticateService, AuthGuard, DonorGuard, BeneficiaryGuard,
    ApprovedGuard,AdminGuard, ShoppingCartService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
