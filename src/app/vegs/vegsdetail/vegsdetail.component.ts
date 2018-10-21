import { Component, OnInit, Output, Input } from '@angular/core';
import {Veg} from '../vegs.model';
import { Router } from '@angular/router';
import { CartlistService } from '../../shared/cartlist.service';
import { Subject, Subscription } from 'rxjs';
import { EditvegService } from '../editveg.service';
@Component({
  selector: 'app-vegsdetail',
  templateUrl: './vegsdetail.component.html',
  styleUrls: ['./vegsdetail.component.css']
})
export class VegsdetailComponent implements OnInit {

@Input() veg: Veg;
editveg = new Subject();
  constructor(private router: Router, private CartlistService: CartlistService,
  private editevegservice: EditvegService
  ) { }

  ngOnInit() {
  }

  onaddtocart() {
   const data = this.CartlistService.toshoppinglistservice(this.veg);

  }
  oneditveg(veg) {
   /*  const editveg = [{
                   id: veg._id,
                   name: veg.itemname,
                   description: veg.itemdescription,
                   price: veg.price,
                   imageurl: veg.imageurl
    }];
 */

 this.editevegservice.geteditveg(veg);

 this.router.navigate(['editveg']);
console.log('veg is' , veg);

}

}
