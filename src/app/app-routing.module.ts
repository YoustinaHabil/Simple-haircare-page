import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginTdfComponent } from './login-tdf/login-tdf.component';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { PostsComponent } from './posts/posts.component';
import { ProductDiscountComponent } from './product-discount/product-discount.component';
import { ProductWithoutdiscountComponent } from './product-withoutdiscount/product-withoutdiscount.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { RegisterTdfComponent } from './register-tdf/register-tdf.component';
import { SignInTdfComponent } from './sign-in-tdf/sign-in-tdf.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'home',component : HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'users',component:UsersComponent},
  {path:'posts',component:PostsComponent},
  {path:"Login",component:LoginTdfComponent},
  {path:"Register",component:RegisterTdfComponent},

  {path:"SignIn",component:SignInTdfComponent},

 {path:'posts/:ID',component:PostsDetailsComponent,
children:[
  {path:"withdiscount",component:ProductDiscountComponent},
  {path:"withoutdiscount",component:ProductWithoutdiscountComponent}
]
},
]
@NgModule(
  {
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
