import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { LogoutComponent } from "./logout/logout.component";
import { PurchasebookComponent } from './purchasebook/purchasebook.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"signup" , component:UserregistrationComponent},
  {path:"bookdetails/:id",component:BookdetailsComponent},
  {path:"login",component:LoginComponent},
  {path:"logout",component:LogoutComponent},
  {path:"purchase/:id",component:PurchasebookComponent},
  {path:"userdetails",component:UserdetailsComponent},
  {path:"forgot",component:SetpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
