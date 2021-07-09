import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/Shop';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  shops: Shop[] = [];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.getShops().subscribe((shops) => this.shops = shops);
  }

}
