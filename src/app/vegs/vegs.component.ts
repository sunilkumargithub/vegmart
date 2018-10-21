import { Component, OnInit } from '@angular/core';
import {Veg} from './vegs.model';
@Component({
  selector: 'app-vegs',
  templateUrl: './vegs.component.html',
  styleUrls: ['./vegs.component.css']
})
export class VegsComponent implements OnInit {
selectedVeg: Veg;
  constructor() { }

  ngOnInit() {
  }

}
