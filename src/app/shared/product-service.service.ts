import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../model/product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  productsUrl: string = "http://localhost:3000/products";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(this.productsUrl);
  }

  deleteProducts(product: Product | number): Observable<Product>{
    const id = typeof product === 'number' ? product : product.id;
    const url = this.productsUrl + '/' + id;
    return this.http.delete<Product>(url);
  }

  getProductById(product: Product | number): Observable<Product>{
    const id = typeof product === 'number' ? product : product.id;
    const url = this.productsUrl + '/' + id;
    return this.http.get<Product>(url);
  }

  updateProduct(id: number, product: Product){
    return this.http.put<Product>(this.productsUrl + '/' + id, product, this.httpOptions);
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.productsUrl , product, this.httpOptions);
  }

}
