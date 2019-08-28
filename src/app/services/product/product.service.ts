import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public _newProductUrl = "";
  public _getProductsUrl = "/api/cat/getCatDetailsByGroup";
  public _allProductsUrl = "";
  public _getProductByIdUrl = "/api/cat/getCatDetailsById";
  public cartUrl = "/api/cart/saveCartDetails";
  public getCartDetailUrl = '/api/cart/getCartDetails';

  constructor(private http : HttpClient, private router : Router) { }

  createProduct(product){
   return this.http.post(this._newProductUrl, product);
  }
  getProductsByGroup(id){
    return this.http.get(this._getProductsUrl, {params : new HttpParams().set('catgroupId' , id)});
  }
  getAdminProducts(){
    return this.http.get(this._allProductsUrl);
  }
  getProductById(id){
    return this.http.get(this._getProductByIdUrl, {params : new HttpParams().set('catentryId' , id)});
  }

  toCart(id){
    return this.http.post(this.cartUrl, id);
  }
  getCartDetails(){
    return this.http.get(this.getCartDetailUrl);
  }
  removeItem(id){
    return this.http.post('/api/cart/deleteFromCart',id);
  }
  getTotalAmount(){
    return this.http.get('/api/cart/getTotalAmount');
  }
  quantityChange(id){
    return this.http.post('/api/cart/changeQuantity', id);
  }

  addToCart(id) {
    let token = localStorage.getItem('token');
    if (token) {
      let newId = { 'catentryId': id, 'quantity': 1 };
      console.log(newId);
      this.toCart(newId).subscribe(res => {
        console.log(res);
        alert('added successfully');
        this.router.navigate(['/shopping-cart']);
      })
    }else{
      alert("please Login to Continue");
      this.router.navigate(['/login']);
    }
  }
  search(keyword){
    return this.http.post('/api/cat/search', keyword);
  }
  searchResult(string){
    return this.http.post('/api/cat/searchResult', string);
  }
}