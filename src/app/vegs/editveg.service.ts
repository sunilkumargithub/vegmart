import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Veg } from './vegs.model';
import { Cart } from '../shared/cart.model';

@Injectable({
  providedIn: 'root'
})
export class EditvegService {
  editveg = new Subject<any[]>();
  Products: any[] = [];

  constructor(private router: Router) { }


  geteditveg(veg) {
this.Products.push(veg);
this.editveg.next(this.Products);


  }
}
