import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products;

  constructor(private prodSer : ProductService) { }

  ngOnInit() {
    this.prodSer.getProducts()
    .subscribe(res  => {
      console.log(res);
    })
  }

}
