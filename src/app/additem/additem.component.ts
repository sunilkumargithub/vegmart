import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Http} from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {

  }

  onAddItem(form: NgForm) {
console.log(form.value);
const mdata = {
  itemname: form.value.itemname ,
itemdescription: form.value.itemdescription,
imageurl: form.value.imageurl,
price: form.value.price
};
console.log(mdata);
this.http.post('http://localhost:4000/vegItem', mdata)
.subscribe((res) => {

  console.log(res);
});
this.router.navigate(['/vegetables']);

  }

}
