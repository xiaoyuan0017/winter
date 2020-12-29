import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
// import { FileUploader,FileSelectDirective } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TrackingComponent } from './tracking/tracking.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CategoryComponent } from './category/category.component';
import { SinproComponent } from './sinpro/sinpro.component';
import { BlogComponent } from './blog/blog.component';
import { SinblogComponent } from './sinblog/sinblog.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { SuccessComponent } from './success/success.component';
import { SubshopComponent } from './subshop/subshop.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SublogComponent } from './sublog/sublog.component';
import { ProfileComponent } from './profile/profile.component';
import { PaysuccessComponent } from './paysuccess/paysuccess.component';
import { PayfaildComponent } from './payfaild/payfaild.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TrackingComponent,
    CheckoutComponent,
    CartComponent,
    ConfirmationComponent,
    CategoryComponent,
    SinproComponent,
    BlogComponent,
    SinblogComponent,
    ContactComponent,
    SignupComponent,
    SuccessComponent,
    SubshopComponent,
    ForgotComponent,
    SublogComponent,
    ProfileComponent,
    // FileSelectDirective,
    PaysuccessComponent,
    PayfaildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
