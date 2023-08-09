import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  getData(){
   return this.http.get('https://fakestoreapi.com/products');
  }
}
