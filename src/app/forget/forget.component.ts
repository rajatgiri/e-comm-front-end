import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  public serverRes;
  message;
  resMessage;
  otpRes;
  emailId;

  constructor(private authSer: AuthService, private route : Router) { }

  ngOnInit() {
  }

  forgetPassword(value) {
    console.log(value.email);
    this.emailId = value.email;
    localStorage.setItem('email' , this.emailId);
    this.authSer.resetPassword(value).subscribe(res => {
      this.serverRes = res;
      console.log(res);
      console.log(this.serverRes);
      this.message = this.serverRes.reason;
      // if (this.serverRes.reason === "OTP sent !!") {
      //   this.message = this.serverRes.reason;
      // }
      //  else {
      //   this.message = this.serverRes.reason;
      // }
    });

  }

  onOtpEnter(otp){
    otp.email = this.emailId;
    // let newOtp = {'email' : this.emailId, otp}
    console.log(otp);
    this.authSer.sendOtp(otp).subscribe(res =>{
      console.log(res);
      this.resMessage = res;
      this.otpRes = this.resMessage.success;
      console.log(this.otpRes);
      if(this.otpRes){
        this.route.navigate(['/reset-password']);
      }
    })
  }


}
