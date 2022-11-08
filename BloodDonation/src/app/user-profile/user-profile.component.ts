import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private service:UserService) { }
  userDetails: any = {
    name: '',
    dob: "",
    number: "",
    alternativeNumber: "",
    bloodGroup: "",
    address: "",
    password: "",
    confirmPassword: "",
    role: "",
    email: ""
  };
  ngOnInit(): void {
    this.userDetails=this.service.localStorage();
  }

}
