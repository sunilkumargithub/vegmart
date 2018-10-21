import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
/* //import { Http, HttpParams } from '@angular/http'; */
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinresult: any;
  data: any;
  constructor(private router: Router , private httpClient: HttpClient) { }

  ngOnInit() {
  }
  onsignin(form: NgForm) {

    const mdata  = {
     'email': form.value.email,
     'password': form.value.password
    };
   /*  //const email =form.value.email;
   // console.log(mdata)

    //let myHeaders = new Headers();
    //myHeaders.append('Content-Type', 'application/json');
   //let mparams = new URLSearchParams();
   //mparams.append("email", form.value.email);
   //mparams.append("password", form.value.password);


//const params = new HttpParams()
 //     .append("email", form.value.email)
  //    .append("password", form.value.password);
//console.log(params)s */

    this.httpClient.post('http://localhost:4000/validateusers', mdata )
     .subscribe((res) => {
     console.log(res);

     //if ((res.message === 'valid Auth' )) {
     // this.router.navigate(['/vegetables']);
    //}
     //if ((res.message === 'invalid Auth')) {
     // this.signinresult = 'invalid user credential, Please try again';
    // }
     }
      , (error => console.log(error)
    ));

  /*   //this.http.get('http://localhost:4000/registeredusers')
     // .map(res =>  res.mdata )
      //.subscribe(res => console.log(res)); */

  }
}
