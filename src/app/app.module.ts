import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

import { ShopReducer } from './store/reducer';
import { ShopEffects } from './store/effects';
import { AppRoutingModule } from './routing/app-routing.module';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChangeShopComponent } from './shops/change-shop/change-shop.component';
import { ListShopsComponent } from './shops/list-shops/list-shops.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { environment } from '../environments/environment'; // Angular CLI environment



import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartModule } from './cart/cart.module';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './store/entity/entity-metadata';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductListComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    ChangeShopComponent,
    ListShopsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CartModule,
    StoreModule.forRoot({ shop: ShopReducer }),
    EffectsModule.forRoot([ShopEffects]),
    AppRoutingModule,
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
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
