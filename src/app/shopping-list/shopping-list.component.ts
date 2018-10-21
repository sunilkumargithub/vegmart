import { Component, OnInit } from '@angular/core';
import {Item} from '../shared/item.model';
import { CartlistService } from '../shared/cartlist.service';
import { Veg } from '../vegs/vegs.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
subscription: Subscription;
items: Item[] = [
  new Item('potato' , 5),
  new Item('onion' , 2)

];
  constructor(private cartlistservice: CartlistService) {}



  ngOnInit() {
 /*    this.subscription = this.cartlistservice.newitemobservable.subscribe((value) => {
      console.log(value); */

}



/* this.subscription = this.cartlistservice.toshoppinglistservice().subscribe((value) =>{
  console.log(value);
});
 */
}
