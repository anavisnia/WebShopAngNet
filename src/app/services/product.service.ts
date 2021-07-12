import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Product } from 'src/app/Product';
import { Observable} from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private apiUrl = 'http://localhost:5000/products';
  //from WebShop .net app
  private apiUrl = 'https://localhost:44358/Product';
  // private apiUrl = 'https://localhost:44358/GetAllWithDiscount';

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  //id should be indicated in the DTO
  deleteProduct(product:Product): Observable<Product> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.delete<Product>(url);
  }
  // how to pass an object?
  // deleteProduct(product:Product): Observable<Product> {
  //   const url = `${this.apiUrl}/${product}`;
  //   console.log(product);
  //   console.log("deleteProduct");
  //   return this.http.delete<Product>(url);
  // }

  addProduct(product: Product) : Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product, httpOptions);
  }

  updateProduct(product: Product) :Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }
}
