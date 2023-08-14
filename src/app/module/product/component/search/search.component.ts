import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';

import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
// import {} from '../../service/message.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchValue!: string;
  data!: any;
  subs!: Subscription;
  loading: boolean = true;

  constructor(private Httpdata: DataService, private routes: ActivatedRoute) {}

  ngOnInit() {
    this.subs = this.Httpdata.getData().subscribe((response) => {
      this.data = response;
      this.loading = false;
    });
    this.routes.queryParams.subscribe((params) => {
      this.searchValue = params['keyword'];
    });
    console.log("running from search")
  }
}
