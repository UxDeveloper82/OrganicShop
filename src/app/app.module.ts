import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AuthService } from './_services/auth.service';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent,
      ProductsComponent,
      ShoppingCartComponent,
      CheckOutComponent,
      OrderSuccessComponent,
      LoginComponent,
      AdminProductsComponent,
      AdminOrdersComponent,
      MyOrdersComponent
   ],
   imports: [
      BrowserModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      NgbModule.forRoot(),
      RouterModule.forRoot([
         { path: '', component: HomeComponent },
         { path: 'products', component: ProductsComponent },
         { path: 'shopping-cart', component: ShoppingCartComponent },
         { path: 'check-out', component: CheckOutComponent },
         { path: 'my/orders', component: MyOrdersComponent },
         { path: 'login', component: LoginComponent },
         { path: 'admin/products', component: AdminProductsComponent },
         { path: 'admin/orders', component: AdminOrdersComponent }

      ])
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
