import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let authSer = this.injector.get(AuthService);
    let token = authSer.getToken();
    if (token) {
      let tokenizedReq = req.clone({
        setHeaders: {
          authorization: `${authSer.getToken()}`
        }
      })
      return next.handle(tokenizedReq);

    } else {
      return next.handle(req);
    }
  }

}
