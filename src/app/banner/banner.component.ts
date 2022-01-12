import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  slide = [
    {img: "https://cdn11.bigcommerce.com/s-e6b77/images/stencil/1165w/carousel/65/meiomi_banner_v2__93531.png?c=2"},
    {img: "https://cdn11.bigcommerce.com/s-e6b77/images/stencil/1165w/carousel/64/daou_vineyards_banner2_v2__43379.png?c=2  "},
    {img: "https://cdn11.bigcommerce.com/s-e6b77/images/stencil/1165w/carousel/66/beaulieu_vineyard_banner_v2__80999.png?c=2"},
    
  ];
  
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "autoplay":true, "autospeed":100};

  
  
 
  constructor() { }

  ngOnInit(): void {
  }

  
}
