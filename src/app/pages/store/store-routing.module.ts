import { StoreComponent } from './store.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      component: StoreComponent,
      children: [
        {
          path: 'products',
          loadChildren: () =>
            import('./products/products.module').then(
              m => m.ProductsModule,
            ),
        }
      ]
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class StoreRoutingModule { }