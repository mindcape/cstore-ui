import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

import { ShopReducer } from './store/reducer';
import { ShopEffects } from './store/effects';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { Router } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ChangeShopComponent } from './shops/change-shop/change-shop.component';
import { ListShopsComponent } from './shops/list-shops/list-shops.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductListComponent,
    ProductComponent,
    CartComponent,
    LoginComponent,
    ChangeShopComponent,
    ListShopsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ shop: ShopReducer }),
    EffectsModule.forRoot([ShopEffects]),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
      // Use a custom replacer to display function names in the route configs
      // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
  
      // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
    }
}
