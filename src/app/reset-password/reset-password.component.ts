import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})

export class ResetPasswordComponent implements OnInit {
  user= {};
  resMessage;

  password:any;
  conpassword:any;
  passerror:string;

  constructor(private authSer : AuthService, private route : Router) { 
  }

  checkpassword(){
    let password = this.password;
    let conpassword = this.conpassword;
    if(password != conpassword){
       this.passerror = 'Password and confirm password should be same.';
    } else{
      this.passerror='';
    }
  }

  ngOnInit() {
  }

  submitPassword(value){
    console.log(value);
    this.authSer.newPassword(value).subscribe(res =>{
      console.log(res);
      this.resMessage = res;
      alert(this.resMessage.reason);
      this.route.navigate(['/login']);
    })

  }
}
