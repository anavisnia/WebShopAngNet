import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Product';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  @Output() onUpdateProduct: EventEmitter<Product> = new EventEmitter;
  name?: string;
  price?: number;
  quantity?: number;
  showUpdateProduct?: boolean;
  type?: string;
  shopName?: string;
  subscription?: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showUpdateProduct = value);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.name || !this.price || !this.quantity || !this.type || !this.shopName) {
      alert('Please enter the information!');
      return;
    }

    const updateProduct = {
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      type: this.type,
      shopName: this.shopName
    }

    this.onUpdateProduct.emit(updateProduct);

    this.name = '';
    this.price = 0.00;
    this.quantity = 0;
    this.type = '',
    this.shopName = ''
  }

}
