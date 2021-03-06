import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingBagComponent } from './shopping-bag.component';
import { ShoppingBagRoutingModule } from './shopping-bag-routing.module';
import {MatButtonModule} from '@angular/material/button';
import { RemoveItemComponent } from './remove-item/remove-item.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [ShoppingBagComponent, RemoveItemComponent],
  imports: [
    CommonModule,
    ShoppingBagRoutingModule,
    MatButtonModule,
    MatDialogModule,
    NgxMaskModule.forChild() 
  ]
})
export class ShoppingBagModule { }
