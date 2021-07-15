import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Product';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  subscription?: Subscription;
  @Output() onDeleteProduct: EventEmitter<Product> = new EventEmitter;
  @Output() onUpdateProduct: EventEmitter<Product> = new EventEmitter;
  showUpdateProduct?: boolean;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showUpdateProduct = value);
  }

  ngOnInit(): void {
    
  }

  onDelete(product:Product) {
    this.onDeleteProduct.emit(product);
  }

  onUpdate(product:Product) {
    this.onUpdateProduct.emit(product);
  }

  toggleUpdateProduct() {
    this.uiService.toggleUpdateProduct();
  }

}
