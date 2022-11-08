import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: UserService, private route: Router) { }

  ngOnInit(): void {
  }
  user= new FormGroup({
    name: new FormControl('',[Validators.pattern("[a-zA-Z]{3,}")]),
    dob: new FormControl(''),
    number: new FormControl(''),
    alternativeNumber: new FormControl(''),
    bloodGroup: new FormControl('-Select BloodGroup-'),
    address: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    role: new FormControl('User'),
    email: new FormControl('')
  });
  checkPassword = false;

  save() {
    if (this.user.value.password == this.user.value.confirmPassword) {
      this.checkPassword = false;
      this.register();
    } else {
      this.checkPassword = true;
    }
  }
  register() {
    console.log("===",this.user)
    //this.service.register(this.user.value).subscribe();
    //this.route.navigate(['']);
  }
}
