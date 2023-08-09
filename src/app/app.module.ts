import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//skeleton loader
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
//reactive forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//carosel
import { CarouselModule } from '@coreui/angular';

//routing module
import { AppRoutingModule } from './app-routing.module';
//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
//services 
import { ServicesService } from './services.service';//create a user default service
import {HttpClientModule} from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoaderComponent } from './component/loader/loader.component';
 //importing a service

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchPipe,
    FilterPipe,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
