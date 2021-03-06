import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ShopsComponent } from './components/shops/shops.component';
import { HeaderComponent } from './components/header/header.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ButtonComponent } from './components/button/button.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductItemComponent,
    ShopsComponent,
    HeaderComponent,
    AddProductComponent,
    ButtonComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
