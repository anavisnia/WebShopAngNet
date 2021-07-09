import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Product } from 'src/app/Product';
import { Observable} from 'rxjs'

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
}
