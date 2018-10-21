import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Veg} from '../../vegs.model';
@Component({
  selector: 'app-vegsitem',
  templateUrl: './vegsitem.component.html',
  styleUrls: ['./vegsitem.component.css']
})
export class VegsitemComponent implements OnInit {
  @Output() vegSelected = new EventEmitter<void>();
@Input() veg: Veg;
  constructor() { }

  ngOnInit() {
  }


  onSelected() {

this.vegSelected.emit();
  }
}
