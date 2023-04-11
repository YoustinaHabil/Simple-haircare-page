import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { ProductComponent } from './product/product.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppParentComponent } from './app-parent/app-parent.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDatailsComponent } from './product-datails/product-datails.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { ProductDiscountComponent } from './product-discount/product-discount.component';
import { ProductWithoutdiscountComponent } from './product-withoutdiscount/product-withoutdiscount.component';
import { RegisterTdfComponent } from './register-tdf/register-tdf.component';
import { LoginTdfComponent } from './login-tdf/login-tdf.component';
import { SignInTdfComponent } from './sign-in-tdf/sign-in-tdf.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    ProductComponent,
    NgForComponent,
    NgIfComponent,
    EventBindingComponent,
    AppParentComponent,
    ProductListComponent,
    ProductDatailsComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    ProductsComponent,
    PostsDetailsComponent,
    ProductDiscountComponent,
    ProductWithoutdiscountComponent,
    RegisterTdfComponent,
    LoginTdfComponent,
    SignInTdfComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
