import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Cart } from '../shared/cart.model';
import { CartlistinService } from './cartlistin.service';
import { Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit , OnDestroy {
 subscription: Subscription ;
 quantitychanged = new Subject();
  cart: Cart[] = [];
 datas  = [];
 length = 0;
 total = 0;
quantity = 1;
subtotal;
ischangedcartitem = false;
  constructor(private cartlistinservice: CartlistinService, private router: Router) {}



ngOnInit() {

  const data = this.cartlistinservice.getitems();
  this.cart = data;

  this.subscription = this.cartlistinservice.itemschanged.subscribe((value) => {

    const d = value.map((mapdata) => {
     const de = mapdata.price;
     this.total = de;
     console.log('subscribedd data isds ', de);
    });
});





}
ngOnDestroy() {
  this.subscription.unsubscribe();
  }

ondecrease(cart, i) {

  const newdata = cart;
  if (newdata.quantity <= 1) {
return;
  }

  newdata.quantity = (newdata.quantity - 1);

  newdata.amount = (newdata.quantity) * (newdata.price);

}


onincerase(cart, i) {
const newdata = cart;
 this.ischangedcartitem = true;

 newdata.quantity = (newdata.quantity + 1);

newdata.amount = (newdata.quantity) * (newdata.price);
}




/*
cartitems() {
  const cartitems = this.cartlistinservice.getitems();
  console.log(cartitems);
 }
 */

oncheckout() {
  this.router.navigate(['checkout']);
}


}
