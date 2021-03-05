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
  cartEmpty: boolean = false;
  total: number;
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
    this.cartProduct = (this.storage.read(CART_PRODUCT) || []);
    this.cartEmpty = (this.cartProduct.length < 1);
    if (!this.cartEmpty) {
      this.countTotal();
    }
  }

  increment(index) {
    index.quantidade = index.quantidade + 1;
    index.isAdd = false;
    this.countTotal();
  }

  decrement(index) {
    if (index.quantidade <= 1) {
      // index.quantidade = 0;
      this.removeItem(index);
    } else {
      index.quantidade = index.quantidade - 1;
    }
    index.isAdd = false;
    this.countTotal();
  }

  removeItem(product) {
    this.dialogRemoveItem = this.dialog.open(RemoveItemComponent, {
      panelClass: 'container-add'
    });

    this.dialogRemoveItem.afterClosed().subscribe(res => {

      if (res) {
        this.cartProduct.splice(this.cartProduct.indexOf(product), 1)
        this.storage.remove(CART_PRODUCT);
        this.storage.save(CART_PRODUCT, this.cartProduct);
        this.setCartProduct();
      }
    });
  }

  countTotal() {
    const preco = this.cartProduct.map(i => i.preco * i.quantidade);
    this.total = preco.reduce((acum, preco) => acum + preco);
  }


  checkout() {
    this.storage.remove(CART_PRODUCT);
    this.storage.save(CART_PRODUCT, this.cartProduct);
    this.router.navigate(['/main/client/identification']);
  }


}
