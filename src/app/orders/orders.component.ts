import { Component, OnInit } from '@angular/core';
import { CartlistinService } from '../cartlist/cartlistin.service';
import { Cart } from '../shared/cart.model';
import { Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { OrdersService } from '../orders.service';
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  subscription: Subscription;

  cartdata: Cart[] = [];
form = [];
  constructor(private orderservice: OrdersService, private router: Router) { }




  ngOnInit() {
 this.orderservice.orderssub.subscribe((form) => {
   //const Cartorders = cartorders;
  //this.cartdata = Cartorders;
console.log('oninit form ', form);
 // console.log('oninint cartorders are' , Cartorders);


});


      }
}
