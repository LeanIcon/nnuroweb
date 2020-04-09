import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadShopProducts();
  }




  loadShopProducts() {
    console.log('Load Product 1, 2 and 3');
  }

}
