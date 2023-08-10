import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  selectedValue!:string;
  data!: any;
  subs!: Subscription;
  loading: boolean = true;

  
  constructor(private Httpdata: DataService) {}

  ngOnInit() {
    this.subs = this.Httpdata.getData().subscribe((response) => {
      console.log('response received for product');
      this.data = response;
      if (this.data.size > 0) {
        this.loading = false;
      }
      console.log(this.data);
    });

    // setTimeout(() => {
    //   if (this.data.length > 0) {
    //     this.loading = false;
    //   }
    //   console.log("loading...")
    // }, 2000);
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
