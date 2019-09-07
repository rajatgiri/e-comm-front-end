import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  private user: string;
  private userData;
  private userDataAddress;
  public inactive: boolean = true;
  public inactiveAddress: boolean = true;
  public editButtonName: string = "Edit";
  public editAddressButtonName: string = "Edit";
  public addressId;

  constructor(private userSer: UserService) { }

  ngOnInit() {
    this.getUserProfile();
  }
  getUserProfile(){
    this.user = localStorage.getItem('name');
    this.userSer.getUser().subscribe(res =>{
      if(res){
        this.userData = res['data'];
        this.userDataAddress = this.userData['address'];
        console.log(this.userData);
        console.log(this.userDataAddress);
        this.addressId = this.userData.address[0].addressId;
        if(this.addressId == null){
          this.editAddressButtonName = 'Add Address';
        }
        console.log(this.addressId);
    //     this.inactive = true;
    // this.inactiveAddress= true;
    
   
      }
      
    }, error =>{
      alert(error.message);
    }
    )
  }
  onEdit() {
    this.inactive = !this.inactive;
    if (this.inactive == false) {
      this.editButtonName = "Cancel";
    } else {
      this.editButtonName = "Edit";
    }
  }
  onEditAddress() {
    this.inactiveAddress = !this.inactiveAddress;
    if (this.inactiveAddress == false) {
      this.editAddressButtonName = "Cancel";
    } else {
      this.editAddressButtonName = "Edit";
    }
  }
  onDetailsSubmit(formData) {
    console.log(formData);
    this.userSer.updateUser(formData).subscribe(res => {
      console.log(res);
      alert(res['reason'].toUpperCase());
      this.onEdit();
    })
  }
  onAddressSubmit(formData) {
    console.log(formData);
    formData.addressId = this.addressId;
    this.userSer.updateUserAddress(formData).subscribe(res => {
      console.log(res);
      alert(res['reason'].toUpperCase());
    this.getUserProfile();
    this.onEditAddress();
    })
  }
  onAddAddress() {
  }

}
