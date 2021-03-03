import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingBagComponent } from './shopping-bag.component';
import { ShoppingBagRoutingModule } from './shopping-bag-routing.module';



@NgModule({
  declarations: [ShoppingBagComponent],
  imports: [
    CommonModule,
    ShoppingBagRoutingModule
  ]
})
export class ShoppingBagModule { }
