import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { DataService } from './service/data.service'; //create a user default service
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './pipes/filter.pipe';
import { ProductComponent } from './component/product/product.component';
import { AppModule } from '../../app.module';

import { ProductHomeComponent } from './component/product-home/product-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SearchComponent } from '../product/component/search/search.component';
import { SearchPipe } from './pipes/search.pipe';
const routes: Routes = [
  {
    path: 'product-home/:id',
    component: ProductHomeComponent,
  },
  { path: '', component: ProductComponent },
];

@NgModule({
  declarations: [
    FilterPipe,
    SearchPipe,
    ProductComponent,
    ProductHomeComponent,
    SearchComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FontAwesomeModule,
    NgxPaginationModule,
    MatPaginatorModule,

    // AppModule,
  ],
  providers: [DataService],
})
export class ProductModule {}
