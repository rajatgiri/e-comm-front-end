import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { RegisterComponent } from './register/register.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AuthGuard } from './authguard/auth.guard';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ForgetComponent } from './forget/forget.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductStartComponent } from './product-start/product-start.component';
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'order-success', component: OrderSuccessComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'forget', component: ForgetComponent
  },
  {
    path: 'reset-password', component: ResetPasswordComponent
  },
  { path: 'my-orders', component: MyOrdersComponent },
  {
    path: 'my-profile',
    component: MyProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/product/new',
    component: ProductFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
