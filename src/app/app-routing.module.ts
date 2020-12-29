import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { TrackingComponent } from "./tracking/tracking.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { CartComponent } from "./cart/cart.component";
import { ConfirmationComponent } from "./confirmation/confirmation.component";
import { CategoryComponent } from "./category/category.component";
import { SinproComponent } from "./sinpro/sinpro.component";
import { BlogComponent } from "./blog/blog.component";
import { SinblogComponent } from "./sinblog/sinblog.component";
import { ContactComponent } from "./contact/contact.component";
import { SignupComponent } from "./signup/signup.component";
import { SuccessComponent } from "./success/success.component";
import { SublogComponent } from "./sublog/sublog.component";
import { SubshopComponent } from "./subshop/subshop.component";
import { ProfileComponent } from "./profile/profile.component";
import { ForgotComponent } from "./forgot/forgot.component";
import { PaysuccessComponent } from "./paysuccess/paysuccess.component";
import { PayfaildComponent } from "./payfaild/payfaild.component";





const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'home',
    component: HomeComponent

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot',
    component: ForgotComponent
  },
  {
    path: 'track',
    component: TrackingComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent
  },
  {
    path: 'shop',
    component: CategoryComponent
  },
  {
    path: 'shopinfo',
    component: SinproComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'bloginfo/:id',
    component: SinblogComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: 'postShop',
    component: SubshopComponent
  },
  {
    path: 'postBlog',
    component: SublogComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'paysuccess',
    component: PaysuccessComponent
  },
  {
    path: 'payfaild',
    component: PayfaildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
