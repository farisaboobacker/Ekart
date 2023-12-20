import { Routes } from '@angular/router';
import { SignupComponent } from './Signup/Signup.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';


export const routes: Routes = [
  {path:'',
  component:LayoutComponent,
    children:[
      {path:"",component:HomeComponent},
      {path:"signup",component:SignupComponent},
      {path:"login",component:LoginComponent},
      {path:"product",component:ProductComponent},
      {path:"add/product",component:AddProductComponent},
    ]
  },
  {
      path:"admin",
      component:AdminComponent,
      children:[
        {path:'product',component:ProductComponent},
        {path:"signup",component:SignupComponent},
        {path:"login",component:LoginComponent},
        {path:"user",component:UserComponent},
        {path:"adduser",component:AddUserComponent}
      ]
    },
];
