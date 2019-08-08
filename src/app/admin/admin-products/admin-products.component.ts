import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  public productList;

  constructor(private productSer : ProductService) { 
    this.productSer.getProducts().subscribe(res => {
      this.productList = res;
    })
  }

  ngOnInit() {
  }

}
