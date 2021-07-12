import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddProduct: boolean = false;
  private showUpdateProduct: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddProduct() : void {
    this.showAddProduct = !this.showAddProduct;
    console.log('click add');
    this.subject.next(this.showAddProduct);
  }

  toggleUpdateProduct() : void {
    console.log('click update');
    this.showUpdateProduct = !this.showUpdateProduct;
    this.subject.next(this.showUpdateProduct);
  }

  onToggle() : Observable<any> {
    return this.subject.asObservable();
  }
}
