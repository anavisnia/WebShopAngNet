import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Product';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output() onAddProduct: EventEmitter<Product> = new EventEmitter;
  name?: string;
  price?: number;
  quantity?: number;
  showAddProduct?: boolean = true;
  type?: string;
  shopName?: string;
  subscription?: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddProduct = value);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.name || !this.price || !this.quantity || !this.type) {
      alert('Please add a product!');
      return;
    }

    const newProduct = {
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      type: this.type,
    }

    this.onAddProduct.emit(newProduct);

    this.name = '';
    this.price = 0.00;
    this.quantity = 0;
    this.type = ''
  }

}
