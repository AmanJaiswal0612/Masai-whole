import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { HomeComponent } from './home/home.component';
import { RestaurantLoginComponent } from './restaurant-login/restaurant-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurant-login', component: RestaurantLoginComponent },
  { path: 'customer-login', component: CustomerLoginComponent },
  { path: 'user-register', component: UserRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
