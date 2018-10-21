import { Injectable } from '@angular/core';
import { Veg } from '../vegs/vegs.model';
import { Subject } from 'rxjs';
import { Item } from './item.model';
import { Cart } from './cart.model';
import { CartlistinService } from '../cartlist/cartlistin.service';

@Injectable({
  providedIn: 'root'
})
export class CartlistService {
//newitem = [];

  //public newitemobservable = new Subject();

  constructor(private cartlistinservice: CartlistinService) { }

toshoppinglistservice(veg) {
const newitems = [{ name : veg.itemname,
                    price : veg.price,
                    quantity: 1,
                    amount: veg.price
                  }];
this.cartlistinservice.cartlistitem(newitems);

console.log(newitems);

//this.newitemobservable.next(newitems);


}

}
