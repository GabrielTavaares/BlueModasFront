import { Component, OnInit } from '@angular/core';
import { StorageKey } from 'src/app/core/service/storage/storage.model';
import { StorageService } from 'src/app/core/service/storage/store.service';

const { CART_PRODUCT } = StorageKey;

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.scss']
})
export class ShoppingBagComponent implements OnInit {

  cartProduct: any [] = [];

  constructor(
    private storage: StorageService
  ) { }

  ngOnInit(): void {
    this.setCartProduct();
  }

  setCartProduct(){
    this.cartProduct = this.storage.read(CART_PRODUCT);
    console.log(this.cartProduct);
  }

}
