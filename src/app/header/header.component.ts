import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName;

  constructor(private authSer : AuthService) { }

  ngOnInit() {
    this.userName = localStorage.getItem('name');
    // console.log('name from header ' + this.userName);
    // this.authSer.userName.subscribe(res =>{   
    //   this.userName = res;
    // })
  }

}
