import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'identification',
        loadChildren: () =>
          import('./identification/identification.module').then(
            m => m.IdentificationModule,
          ),
      },
      {
        path: 'order',
        loadChildren: () =>
          import('./order/order.module').then(
            m => m.OrderModule,
          ),
      }
    ]
  },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ClientRoutingModule { }