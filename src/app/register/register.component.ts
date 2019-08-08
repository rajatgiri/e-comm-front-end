import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerUserData = {};
  public error: string = null;
  serverRes;
  displayRes;

  constructor(private authSer: AuthService, private route: Router) { }

  ngOnInit() {
  }

  onRegisterUser(form) {
    console.log(form.value);
    this.authSer.registerUser(form.value)
      .subscribe(res => {
        console.log(res);
        this.serverRes = res;
        this.displayRes = this.serverRes.reason;
        form.reset();
        if(this.serverRes.reason === "register successfully, please login to continue !!"){
          alert("Registered Successfully !!!");
          this.route.navigate(['/login']);
        }

      },
        error => {
          console.log(error.status);
          switch (error.status) {
            case 403: this.error = '403 Forbidden!!';
              break;
            case 504: this.error = 'Gateway Time Out! Please Try Again!!';
              break;
            case 502: this.error = 'Bad Gateway!';
              break;
            case 503: this.error = 'Service Unavailable!';
              break;
            default: 'An Unknown Error Occurred!';
          }
          // form.reset();
        });
    // if (form.valid) {
    //   Swal.fire(
    //     'Good job!',
    //     'Registered Successfully!',
    //     'success'
    //   )

    // }
  }
}
