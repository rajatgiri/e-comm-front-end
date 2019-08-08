import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  user = {};

  constructor(private userSer : UserService) { }

  ngOnInit() {
    this.userSer.getUser().subscribe(res =>{
      this.user = res;
      console.log(this.user);
    })
  }

}
