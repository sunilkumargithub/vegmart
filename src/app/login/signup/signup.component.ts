import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupresult: any;
  error: any;

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    this.signupresult = null;
  }


  onsignup(form: NgForm) {

    var mdata = {
      "email": form.value.email,
      "password": form.value.password,
      "mobile": form.value.mobile,
      "line1": form.value.line1,
      "line2": form.value.line2,
      "line3": form.value.line2,
      "city": form.value.city,
      "state": form.value.state,
      "zipcode": form.value.zipcode
    };
   // console.log(mdata);
    this.http.post('http://localhost:4000/registeredusers', mdata)
      .subscribe((res) => {
        this.signupresult = res;
        console.log(res);
      }, err => { console.log(err); this.error = err ; });
  }
  }
