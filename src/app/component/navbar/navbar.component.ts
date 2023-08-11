import { Component ,OnInit} from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../../service/message.service';
// import { MessageService } from '../../service/message.service';
// import { Subscription } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // message!:string;
  search = new FormControl('');
  constructor(private router:Router,private msg: MessageService) {}
  ngOnInit(): void {

    //  this.msg.changeMessage.subscribe((message: string)=>this.message=message)
  }
  calling(): void {
     this.router.navigate(['/search'], {
       queryParams: { keyword: this.search.value },
     });
  }
}
