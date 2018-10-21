import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Cart } from '../shared/cart.model';
import { Veg } from '../vegs/vegs.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartlistinService implements OnInit  {
  subscriptions: Subscription ;
  itemschanged = new Subject<Cart[]>();
  //formdatasub = new Subject<any>();
 // cartdatasub = new Subject<any>();

 // itemschanged = new EventEmitter<Cart[]>();

  cart: Cart[] = [];
  newcart = [];

  constructor(private router: Router) { }

getitems() {
  return this.cart.slice();
}
getitemsforcheckout(): Observable<Cart[]> {
  return Observable.of(this.cart.slice());
}


  cartlistitem(newcartitem) {
    const newdata = newcartitem;
    this.cart.push(...newdata);
    this.itemschanged.next(this.cart);

  }

  ngOnInit() {




      }

/* ngOndestroy() {
this.subscriptions.unsubscribe();
} */
/*
getorders(formdata, checkout) {
console.log('formdata is :' , formdata);
console.log('checkout is :' , checkout);

 this.formdatasub.next(formdata);
 this.newcart.push(...checkout);
this.cartdatasub.next(checkout);
this.router.navigate(['/orders']);
} */



    }
