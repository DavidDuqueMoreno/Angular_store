import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  images: string[] = [
    'assets/images/Banner1.jpg',
    'assets/images/Banner2.jpg',
    'assets/images/Banner3.jpg',
  ];

  constructor() {}

  ngOnInit() {}
}
