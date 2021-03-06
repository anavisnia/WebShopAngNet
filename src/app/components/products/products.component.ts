import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  
  constructor(private productService: ProductService) { 
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => this.products = products);
  }

  deleteProduct(product:Product) {
    this.productService.deleteProduct(product).subscribe(() => this.products = this.products.filter(p => p.id !== product.id));
  }

  // deleteProduct(product:Product) {
  //   this.productService.deleteProduct(product).subscribe(() => this.products = this.products.filter(p => p.id !== product.id));
  // }
  
  addProduct(product: Product) {
    this.productService.addProduct(product).subscribe((product) => this.products.push(product));
  }
  // should it be like that? copy of addProduct / post method
  updateProduct(product: Product) {
    this.productService.updateProduct(product).subscribe((product) => this.products.push(product));
  }

}
