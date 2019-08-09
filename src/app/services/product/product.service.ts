import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public _newProductUrl = "";
  public _getProductsUrl = "/api/cat/getCatDetailsByGroup?catgroupId=4";
  public _allProductsUrl = "";

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
