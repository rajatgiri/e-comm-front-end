import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   userName = new EventEmitter();
  _registerUrl = '/api/user/register';
  _loginUrl = '/api/user/login';
  _resetPasswordUrl = '/api/user/sendOTP';
  _verifyOtpUrl = '/api/user/verifyOTP';
  _newPasswordUrl = '/api/user/resetPassword';

  constructor(private http : HttpClient, private route : Router) { }

  registerUser(userData){
    return this.http.post(this._registerUrl, userData);
  }
//To get the complete response with header use Observe : 'response'
  loginUser(loginUserData){
    return this.http.post<HttpResponse<any>>(this._loginUrl, loginUserData, { observe: 'response' });
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    // this.route.navigate(['/products/']);
  }

  resetPassword(userEmail){
    return this.http.post(this._resetPasswordUrl, userEmail);
  }

  sendOtp(otp){
    return this.http.post(this._verifyOtpUrl, otp);
  }
  newPassword(value ){
    return this.http.post(this._newPasswordUrl, value);
  }
}

