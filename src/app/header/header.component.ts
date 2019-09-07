import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product/product.service';
import { map } from 'rxjs/operators';

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
  public categories: any;
  public newCat;
  constructor(private authSer: AuthService, private prodSer: ProductService) { }


  ngOnInit() {
    this.userName = localStorage.getItem('name');
    this.prodSer.dynamicCategory().subscribe(res =>{
      console.log(res);
      this.categories = res['data'];
      this.newCat = this.categories[0];
      console.log(this.newCat);
    })
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
    let keyword = { 'searchItem': this.values };
    this.prodSer.search(keyword).pipe(map(res => {
      this.products = res;
      return this.products.data;
    })).subscribe(res => {
      console.log(res);
      if (res == null) {
        this.productData = res;
      } else {
        this.productData = res.slice(0, 5);
      }
    })
  }
  hideTable() {
    document.getElementById("input").style.display = 'none';
  }
  showTable() {
    document.getElementById("input").style.display = 'block';
  }
  onClick() {
    let string = {'searchItem' : this.values};
    console.log(string);

    this.prodSer.searchResult(string).subscribe(res =>{
      console.log(res);
    })
  }
  onCategoryClick(id){
    this.prodSer.invokeOnClickFunction.emit(id);
  }
  
}
