import { NavigationComponent } from './navigation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'store',
        loadChildren: () =>
          import('../store/store.module').then(
            m => m.StoreModule,
          ),
      },
      {
        path: 'client',
        loadChildren: () =>
          import('../client/client.module').then(
            m => m.ClientModule,
          ),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
