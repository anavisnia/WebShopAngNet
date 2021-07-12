import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/Product';
import { UiService } from 'src/app/services/ui.service';
// import { Shop } from 'src/app/Shop';
// import { ShopService } from 'src/app/services/shop.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() onDeleteProduct: EventEmitter<Product> = new EventEmitter;
  @Output() onUpdateProduct: EventEmitter<Product> = new EventEmitter;

  // shops: Shop[] = [];
  // constructor(private shopService: ShopService) { }
  constructor() { 
  }

  ngOnInit(): void {
    // this.shopService.getShops().subscribe((shops) => this.shops = shops);
  }

  onDelete(product:Product) {
    this.onDeleteProduct.emit(product);
  }

  onUpdate(product:Product) {
    this.onUpdateProduct.emit(product);
  }

}
