import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

//to send data(token) to server using Header
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': localStorage.getItem('token')
    })
  };

@Injectable({
  providedIn: 'root'
})
export class UserService {
    userUrl ='/api/user/userProfile';

  constructor(private http : HttpClient) { }
//to send data(token) to server using Header use httpOptions
  getUser(){
    return this.http.get(this.userUrl, httpOptions);
  }
  
}
