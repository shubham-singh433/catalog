import { Component ,OnInit,OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import{faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss'],
})
export class ProductHomeComponent implements OnInit, OnDestroy {
  arrow = faArrowLeft;
  data!: any;
  sub!: Subscription;
  productId!: number;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    this.sub = this.http
      .get('https://fakestoreapi.com/products/' + productId)
      .subscribe((res) => {
        this.data = res;
        // console.log(this.data)
      });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  showSuccess() {
    this.toastr.success('Added Successfully','success',{timeOut:1000});
    // alert('item added successfully');
  }
}
