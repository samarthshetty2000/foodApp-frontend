import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { AuthGuard } from './Guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [{path:"login",component:LoginComponent},
                        {path:"reg",component:RegistrationComponent},
                      {path:"products",component:ProductDetailComponent,canActivate:[AuthGuard]},
                      {path:"order",component:OrderComponent},
                      {path:"customer",component:CustomerDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
