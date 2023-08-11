import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Subscription } from 'rxjs';
import {MessageService} from '../../../../service/message.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  items: number = 5;
  length!: number;
  page: number = 1;
  selectedValue!: string;
  data!: any;
  subs!: Subscription;
  loading: boolean = true;

  constructor(private Httpdata: DataService, private msg: MessageService) {}

  ngOnInit() {
    this.subs = this.Httpdata.getData().subscribe((response) => {
      // console.log('response received for product');
      this.data = response;
      this.length = this.data.length;
      this.loading = false;

      // console.log(this.data);
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
  handlePageEvent(event:any)
  {
    this.items=event.pageSize;
    // console.log(event);
  }
}
