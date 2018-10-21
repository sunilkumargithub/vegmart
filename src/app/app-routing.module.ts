import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from 'src/app/login/signup/signup.component';
import { SigninComponent } from 'src/app/login/signin/signin.component';
import { VegslistComponent } from 'src/app/vegs/vegslist/vegslist.component';
import {VegsComponent} from './vegs/vegs.component';
import {AdditemComponent} from './additem/additem.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {OrdersComponent} from './orders/orders.component';
import { EditvegComponent } from './vegs/vegsdetail/editveg/editveg.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'vegetables', pathMatch: 'full'},
  { path: 'shoppinglist', component: ShoppingListComponent },
  { path: 'cartlist', component: CartlistComponent },

  { path: 'vegetables', component: VegsComponent },

  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'additem', component: AdditemComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'editveg', component: EditvegComponent }



];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
