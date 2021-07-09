import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Shop } from '../Shop';
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private apiUrl = 'https://localhost:44358/Shop';

  constructor(private http:HttpClient) { }

  getShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.apiUrl);
  }
}
