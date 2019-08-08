import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authSer : AuthService, private route : Router){}

  canActivate() : boolean{
    if(this.authSer.loggedIn()){
      return true;
    }else{
      this.route.navigate(['/login']);
      return false;
    }
  }
  
}
