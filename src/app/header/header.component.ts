import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartlistinService } from '../cartlist/cartlistin.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  length = 0;

  constructor(private cartlistinservice: CartlistinService
    ) { }


    ngOnInit() {
    this.subscription = this.cartlistinservice.itemschanged.subscribe((value) => {
       const data = value;
       const d = data.length;
       this.length = d;

  console.log('subscribed data is ', value);

      });
  }

  ngOnDestroy() {
this.subscription.unsubscribe();
  }

}
