import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public _categoryUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http : HttpClient) { }

  getCategories(){
    return this.http.get(this._categoryUrl);
  }

}
