import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public categories: any;

  constructor(private router: Router, private catSer : CategoryService, private productSer : ProductService) {
    this.catSer.getCategories().subscribe(res => {
      this.categories = res;
      console.log(this.categories);
    })
   }

  ngOnInit() {
    
  }
  
  save(product){
    this.productSer.createProduct(product).subscribe(res => {
      console.log(res);
      this.router.navigate(['/admin/products']);
    })
  }

}
