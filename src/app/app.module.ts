import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//skeleton loader
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
//reactive forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//carosel
import { CarouselModule } from '@coreui/angular';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
//routing module
import { AppRoutingModule } from './app-routing.module';
//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
//services 
import { MessageService } from './service/message.service';
import { ServicesService } from './service/services.service';//create a user default service
import {HttpClientModule} from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoaderComponent } from './component/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
// import { SearchComponent } from './module/product/component/search/search.component';

 //importing a service

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchPipe,
    FilterPipe,
    LoaderComponent,
    // SearchComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSkeletonLoaderModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatAutocompleteModule,

    ToastrModule.forRoot(),
  ],
  providers: [ServicesService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
