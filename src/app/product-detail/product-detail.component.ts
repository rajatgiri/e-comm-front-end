import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id;
  products;
  productDetail = {};

  constructor(private route: ActivatedRoute, private prodSer: ProductService, private router : Router) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
    })
    this.prodSer.getProductById(this.id).pipe(map(res => {
      this.products = res;
      return this.products.data;
    }
    ))
      .subscribe(res => {
        this.productDetail = res;
        console.log(res);
      })

  }
  onAddToCart(id){
    this.prodSer.addToCart(id);
  }
 


}
