import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { DataService } from './service/data.service'; //create a user default service
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { FilterPipe } from './pipes/filter.pipe';
import { ProductComponent } from './component/product/product.component';
import { AppModule } from '../../app.module';
import { LoaderComponent } from '../../component/loader/loader.component';

const routes: Routes = [{ path: '', component: ProductComponent }];

@NgModule({
  declarations: [FilterPipe, ProductComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // AppModule,
  ],
  providers: [DataService],
})
export class ProductModule {}
