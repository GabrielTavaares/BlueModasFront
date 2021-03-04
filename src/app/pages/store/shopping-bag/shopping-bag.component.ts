import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StorageKey } from 'src/app/core/service/storage/storage.model';
import { StorageService } from 'src/app/core/service/storage/store.service';
import { RemoveItemComponent } from './remove-item/remove-item.component';

const { CART_PRODUCT } = StorageKey;

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.scss']
})
export class ShoppingBagComponent implements OnInit {

  cartProduct: any[] = [];
  dialogRemoveItem: MatDialogRef<RemoveItemComponent>;

  constructor(
    private storage: StorageService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setCartProduct();
  }

  setCartProduct() {
    this.cartProduct = this.storage.read(CART_PRODUCT);
  }

  increment(index) {
    index.quantidade = index.quantidade + 1;
    index.isAdd = false;
  }

  decrement(index) {
    if (index.quantidade < 1) {
      index.quantidade = 0;
    } else {
      index.quantidade = index.quantidade - 1;
    }
    index.isAdd = false;
  }

  removeItem(id) {

    this.dialogRemoveItem = this.dialog.open(RemoveItemComponent, {
      panelClass: 'container-add'
    });

    this.dialogRemoveItem.afterClosed().subscribe(res => {
      if (res) {
        const indexItemRemove = this.cartProduct.findIndex(item => item._id == id);


        this.cartProduct = this.cartProduct.slice(indexItemRemove, 1);
        // console.log(indexItemRemove, cartProduct);


        this.storage.remove(CART_PRODUCT);
        this.storage.save(CART_PRODUCT, this.cartProduct);

        this.setCartProduct();


        // console.log(this.storage.read(CART_PRODUCT));
      }
    });

  }


  checkout(){
    this.storage.remove(CART_PRODUCT);
    this.storage.save(CART_PRODUCT, this.cartProduct);
    this.router.navigate(['/main/client/identification']);
  }


}
