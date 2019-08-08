import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginUserData = {};
  error: string = null;


  constructor(private authSer: AuthService, private route: Router) {
  }

  ngOnInit() {
  }

  onLoginUser(loginData) {

    this.authSer.loginUser(loginData).subscribe(resp => {
      // console.log(resp.status);
      const token = resp.headers.get('authorization');
      if (!token) {
        this.error = 'Wrong email or password!';
      } else {
        const userName = resp.headers.get('name');
        localStorage.setItem('name', userName);
        // this.authSer.userName.emit(userName);
        console.log(userName);
        localStorage.setItem('token', token);
        console.log(token);
        this.route.navigate(['/shopping-cart']);

      }

    }, error => {
      // console.log(error.status);
      switch (error.status) {
        case 403: this.error = 'Wrong email or password!';
          break;
        case 504: this.error = 'Gateway TimeOut!';
          break;
        case 502: this.error = 'Bad Gateway!';
          break;
        case 503: this.error = 'Service Unavailable!';
          break;
        default: 'An Unknown Error Occurred!';
      }
    });

    console.log(loginData);
    // console.log(this.loginUserData);
    // form.reset();
  }
}
