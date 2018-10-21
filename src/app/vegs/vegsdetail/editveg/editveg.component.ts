import { Component, OnInit, OnDestroy } from '@angular/core';
import { EditvegService } from '../../editveg.service';
import { Veg } from '../../vegs.model';
import { Subscription, Subject } from 'rxjs';


@Component({
  selector: 'app-editveg',
  templateUrl: './editveg.component.html',
  styleUrls: ['./editveg.component.css']
})
export class EditvegComponent implements OnInit {
  editVeg =[];
  fixedVeg=[];

vegchanged = new Subject();
/* data = [{firstname: 'sunil', lastname: 'kumar'},
{firstname: 'sunil', lastname: 'kumar'},
];
 */
  constructor(private editvegservice: EditvegService) { }

  ngOnInit() {
    this.fixedVeg = [{itemname: 'potato' , itemdescription: 'djvu'}];

 this.editvegservice.editveg.subscribe((veg) => {
  this.editVeg = veg;

console.log('subscribed  value is111 ' , JSON.stringify(this.editVeg));
console.log('this.fixedVeg ' , JSON.stringify(this.fixedVeg));




   /*    this.editVeg = veg.map((data) => {
        return [{

                  itemname: data.itemname,
                  itemdescription: data.itemdescription,
                   price: data.price,
                   imageurl: data.imageurl

        }];

            }
          ); */


  //          console.log('newveg are' , this.editVeg);



    });





}


}
