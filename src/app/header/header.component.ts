import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product/product.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName;
  products;
  newProduct;
  values;
  searchText;
  productData;
  constructor(private authSer : AuthService, private prodSer : ProductService) { }


  ngOnInit() {
    this.userName = localStorage.getItem('name');
    // console.log('name from header ' + this.userName);
    // this.authSer.userName.subscribe(res =>{   
    //   this.userName = res;
    // })
  }
  // onClick(id){
  //   this.prodSer.getProductsByGroup(id).pipe(map(res =>{
  //       this.products = res;
  //       return this.products.data;
  //     }
  //     ))
  //     .subscribe(res  => {
  //       this.newProduct = res;
  //       console.log(this.newProduct);
  //     })
  // }


  

  onKey(event: any) { // without type info
    this.values = event.target.value;
    console.log(this.values);
    let keyword = {'searchItem': this.values};
    this.prodSer.search(keyword).pipe(map(res => {
      this.products = res;
      return this.products.data;
    })).subscribe(res =>{
      console.log(res);
this.productData = res;
    })
  }
}
