import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/splash-screen/splash-screen.module').then(
        m => m.SplashScreenModule,
      ),
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./pages/navigation/navigation.module').then(
        m => m.NavigationModule,
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
