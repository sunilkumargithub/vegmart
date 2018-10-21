import { Component, OnInit, Output } from '@angular/core';
import { Cart } from '../shared/cart.model';
import { CartlistinService } from '../cartlist/cartlistin.service';
import { Subscription, Subject } from 'rxjs';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 checkoutorders = new Subject();
 checkoutformsub = new Subject<any>();
  orders = [];
  total = 0;
  singleamount = 0;
checkoutcart: Cart[] = [];

  constructor(private cartlistinservice: CartlistinService,
    private ordersservice: OrdersService,
     private router: Router) { }

 /*  ngOnInit() {
   const items = this.cartlistinservice.getitems();
   this.checkoutcart = items;

items.map((data) => {
  const totalamount = data.amount;
  console.log('total amount is:' , totalamount);
  return totalamount;

});

  }
 */
ngOnInit() {
  this.cartlistinservice.getitemsforcheckout().subscribe((data) => {
console.log('observable data is ', data);

const newdata = data;
this.checkoutcart = newdata;


 const d = newdata.map((mapdata) => {
  this.singleamount = mapdata.amount;



 });

  });
}


onCheckout(f: NgForm) {

const newform = f.value;


this.ordersservice.orderssub.next(newform);


console.log('checkout cat is ' , this.checkoutcart);
this.router.navigate(['/orders']);
}


}
