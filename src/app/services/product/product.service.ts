import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public _newProductUrl = 'https://jsonplaceholder.typicode.com/posts';
  public _getProductsUrl = "https://jsonplaceholder.typicode.com/users";
  public _allProductsUrl = '';

  constructor(private http : HttpClient) { }

  createProduct(product){
   return this.http.post(this._newProductUrl, product);
  }
  getProducts(){
    return this.http.get(this._getProductsUrl);
  }
  getAllProducts(){
    return this.http.get(this._allProductsUrl);
  }
}
