import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServicesService } from '../../services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  selectedValue: string = 'all';
  data!: any;
  subs!: Subscription;
  loading: boolean = true;
  constructor(private Httpdata: ServicesService) {}

  ngOnInit() {
    setInterval(() => {
      this.subs = this.Httpdata.getData().subscribe((response) => {
        console.log('response received');
        this.data = response;
      });

      if (this.data.length > 0)
      { this.loading = false;
      }
    }, 1000);
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
