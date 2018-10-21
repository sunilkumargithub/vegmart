import { Component, OnInit, Output } from '@angular/core';
import { Veg } from 'src/app/vegs/vegs.model';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { post } from 'selenium-webdriver/http';
import { filter } from 'rxjs/operators';
import { Observable, Subject, asapScheduler, pipe, of, from,
  interval, merge, fromEvent } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { PageEvent } from '@angular/material';
import { MatSpinner } from '@angular/material';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vegslist',
  templateUrl: './vegslist.component.html',
  styleUrls: ['./vegslist.component.css']
})
export class VegslistComponent implements OnInit {
 @Output() vegWasSelected = new EventEmitter<Veg>();
  isLoading = false;
   veg: Veg[] = [];
  totalposts = 10;
  postsperpage = 5;
  currentpage = 1;
  pagesizeoptions = [1, 2, 5, 10] ;
  constructor(private http: HttpClient) { }





/*
  getData(postperpage: number, currentpage: number)
  : Observable<any> {
  const queryparams = `?pagesize=${postperpage}&page=${currentpage}`;

    const url = 'http://localhost:4000/vegItem' + queryparams;
    return this.http.get(url).map(res => res);
   }
 */
getveg(postperpage: number, currentpage: number) {
  const queryparams = `?pagesize=${postperpage}&page=${currentpage}`;

  this.http.get('http://localhost:4000/vegItem' + queryparams)
  .map(res => res)
  .subscribe((res) => {
 // console.log(res);
const maxItemsarray = res['maxItems'];
const maxItemslength = maxItemsarray.length;
const posts = res['posts'];
this.veg = posts;
this.totalposts = maxItemslength;
});
}


ngOnInit() {
  this.isLoading = true;
this.getveg(this.postsperpage, this.currentpage);
this.isLoading = false;
}
/*
ngOnInit() {
  this.http.get('http://localhost:4000/vegItem')
  .map(res => res)
  .subscribe((res) => {
const posts = res['posts'];
console.log(posts);
this.veg = posts;
/* const Data =
[{
  itemname: posts[0]['itemname'],
  itemdescription: posts[0]['itemdescription'],
  imageurl: posts[0]['imageurl']

}];
console.log(Data); */



//const value = posts[0];
//console.log(value['itemname']);
//console.log(value['itemdescription']);
//console.log(value['imageurl']);
//console.log(value['_id']);


   // this.veg = res.posts;
   // console.log(res.posts);
/*   });

} */





onchangedpage(pagedata: PageEvent) {
  //this.isLoading = true;
this.currentpage = pagedata.pageIndex + 1;
this.postsperpage = pagedata.pageSize;
this.getveg(this.postsperpage , this.currentpage );

}


onVegSelected(veg: Veg) {
 // console.log(veg);
this.vegWasSelected.emit(veg);

}

}


