import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { ProductComponent } from '../product/product.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../auth/login/login.component';
import { ListShopsComponent } from '../shops/list-shops/list-shops.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';





const appRoutes: Routes = [
  { path: 'products', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent},
  { path: 'shops', component: ListShopsComponent},
  { path: '',   redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
