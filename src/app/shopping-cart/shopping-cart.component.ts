import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
products;
newProducts;
amount;
totalAmount;
  constructor(private prodSer : ProductService, private router : Router) { }

  ngOnInit() {
    this.resData();
  }
  
  resData(){
    this.prodSer.getCartDetails().pipe(map(res =>{
      this.products = res;
      return this.products.data;
    }
    )).subscribe(res =>{
      this.newProducts = res;
      console.log(this.newProducts);

    })
    this.prodSer.getTotalAmount().pipe(map(res=>{
      this.amount = res;
      return this.amount.data;
    })).subscribe(res => {
      this.totalAmount = res;
      console.log(this.totalAmount);
    })
  }
  onRemove(id){
    let newId = { 'catentryId': id}
    this.prodSer.removeItem(newId).subscribe(res =>{
      console.log(res);
      // alert('Item deleted from cart!!!');
      this.resData();
      this.router.navigate(['/shopping-cart']);
    })
  }

  onChangeQuantity(id, quantity){
    let newCartId = {'cartId' : id, 'quantity': quantity};
    this.prodSer.quantityChange(newCartId).subscribe(res =>{
      console.log(res);
      this.resData();
    })
  }

}
