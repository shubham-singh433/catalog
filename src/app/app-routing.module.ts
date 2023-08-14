import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
// import { SearchComponent } from './component/search/search.component';
// import { ProductComponent } from './module/product/component/product/product.component';
// import { ProductHomeComponent } from './module/product/component/product-home/product-home.component';
import { ProductSearchComponent } from './module/product/component/product-search/search.component';

const routes: Routes = [
  // { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product-search', component: ProductSearchComponent },
  {
    path: 'product',
    loadChildren: () =>
      import('./module/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
