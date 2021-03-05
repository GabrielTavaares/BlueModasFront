import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/service/product.service';
import { StorageKey } from 'src/app/core/service/storage/storage.model';
import { StorageService } from 'src/app/core/service/storage/store.service';
import { InformationComponent } from 'src/utils/information/information.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

const { CART_PRODUCT } = StorageKey;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList: any [] = [];
  cartProduct: any [] = [];
  isAdd: boolean;
  loading: boolean = false; 
  dialogInformation: MatDialogRef<InformationComponent>;
  constructor(
    private productService: ProductService,
    private storage: StorageService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.loading = true;
    this.productService.getAll().then(res => {
      this.productList = res;
      
      for (let index = 0; index < this.productList.length; index++) {
        this.productList[index].quantidade = 0;
      }

      setTimeout(() => {
        this.loading = false;        
      }, 2000);
      
    }).catch(error => {
      
    })
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

  addCart(index) {
    this.cartProduct = (this.storage.read(CART_PRODUCT) || []);

    const indexCart = this.cartProduct.findIndex(item => item._id == index._id);

    if (index.quantidade != 0) {
      index.isAdd = true;
      if (this.cartProduct.length < 1) {
        this.cartProduct.push(index);
      } else {
        if (indexCart != -1) {
          this.cartProduct.splice(indexCart, 1);
          this.cartProduct.push(index);
        } else {
          this.cartProduct.push(index);
        }
      }
    } else {
      this.dialogInformation = this.dialog.open(InformationComponent, {
        panelClass: 'container-add',
        disableClose: true,
        data: {
          error: true,
          message: 'A quantidade do produto deve ser maior que zero.'
        }
      })
    }

    

    this.storage.save(CART_PRODUCT, this.cartProduct);
  }

}
