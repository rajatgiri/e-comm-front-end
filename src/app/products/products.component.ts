import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products;
  newProduct = [];
  public categories: any;
  public newCat;
  id;

  constructor(private prodSer : ProductService, private router : Router, private route : ActivatedRoute) {
    
    }

  ngOnInit() {
    // this.onClick(4);
    this.onPageLoad();
    
    this.prodSer.dynamicCategory().subscribe(res =>{
      console.log(res);
      this.categories = res['data'];
      this.newCat = this.categories[0];
      console.log(this.newCat);
    })
    // this.route.params.subscribe(params =>{
    //   this.id = params['id'];
    //   this.onClick(this.id);
    // })
    
    
    // this.route.params.subscribe(params =>{
    //   console.log(params);
    //   this.catId = params['id'];
    //   console.log(this.catId);
    // })
    // 
  
  }
  // onSelect(product){
  //   this.router.navigate(['/products'], {queryParams : {catentryId : product.catentryId}});
  // }
onPageLoad(){
  this.prodSer.invokeOnClickFunction.subscribe(id =>{
    this.onClick(id);
    console.log(id);
  })
}

  
  onClick(id){
    this.prodSer.getProductsByGroup(id).pipe(map(res =>{
        this.products = res;
        return this.products.data;
      }
      ))
      .subscribe(res  => {
        this.newProduct = res;
        console.log(this.newProduct);
      })
  }
  onAddToCart(id){
    this.prodSer.addToCart(id);
  }



  }



