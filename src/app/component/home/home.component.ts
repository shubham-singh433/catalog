import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServicesService } from '../../services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  car_Image: any[] = [
    {
      id: 1,
      src: '../assets/p1.png',
    },
    {
      id: 2,
      src: '../assets/p2.png',
    },
    {
      id: 3,
      src: '../assets/p3.png',
    },
    {
      id: 4,
      src: '../assets/p4.png',
    },
  ];
  selectedValue: string = 'all';
  data!: any;
  subs!: Subscription;
  loading: boolean = true;
  constructor(private Httpdata: ServicesService) {}

  ngOnInit() {
    this.subs = this.Httpdata.getData().subscribe((response) => {
      // console.log('response received');
      this.data = response;
      setTimeout(()=>{
          this.loading = false;
      },1000)
    });

   
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
