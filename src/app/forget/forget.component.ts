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

  constructor(private authSer: AuthService, private route : Router) { }

  ngOnInit() {
  }

  forgetPassword(value) {
    console.log(value);
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
    console.log(otp);
    this.authSer.sendOtp(otp).subscribe(res =>{
      console.log(res);
      this.resMessage = res;
      this.otpRes = this.resMessage.reason;
      console.log(this.otpRes);
      if(this.otpRes === "otp matched !!"){
        this.route.navigate(['/reset-password']);
      }
    })
  }


}
