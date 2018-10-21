import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VegsComponent } from './vegs/vegs.component';
import { VegsdetailComponent } from './vegs/vegsdetail/vegsdetail.component';
import { VegslistComponent } from './vegs/vegslist/vegslist.component';
import { VegsitemComponent } from './vegs/vegslist/vegsitem/vegsitem.component';
import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/login/login.service';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AdditemComponent } from './additem/additem.component';
import {MatPaginatorModule, MatSpinner} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { CartitemComponent } from './cartlist/cartitem/cartitem.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { EditvegComponent } from './vegs/vegsdetail/editveg/editveg.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VegsComponent,
    VegsdetailComponent,
    VegslistComponent,
    VegsitemComponent,
    SigninComponent,
    SignupComponent,
    AdditemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CartlistComponent,
    CartitemComponent,
    CheckoutComponent,
    OrdersComponent,
    EditvegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
      AppRoutingModule,
      MatPaginatorModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        MatExpansionModule

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
