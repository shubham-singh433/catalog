import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Catalog';
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
}
