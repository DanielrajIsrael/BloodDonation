import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService, private route: Router) { }

  ngOnInit(): void {
  }
  loginData: any = {
    email: '',
    password: '',
  }
  check = false;
  checkNull = false;
  userData: any = {
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
  empty=''
  isUserLoggedIn: boolean = false;
  login() {
    this.service.login(this.loginData.email, this.loginData.password).subscribe((data) => {
      this.userData = data;
      let userLogged=this.userData.user;
      localStorage.setItem("user", JSON.stringify(userLogged));
      console.log("----",userLogged)
      if (userLogged.role == "User") {
        this.service.setToken(this.userData.accessToken);
        this.route.navigate(['user']);
        this.check = false;
        Swal.fire(
          'Logged In!',
          'Successfully!',
          'success'
        )
      } else if (userLogged.role == "Admin") {
       this.service.setToken(this.userData.accessToken);
        this.route.navigate(['admin']);
        this.check = false;
        Swal.fire(
          'Logged In!',
          'Successfully!',
          'success'
        )
      }
    }, error => {
      if (error.status == 0) {
        this.checkNull = true;
      } else if (error.status == 500) {
        this.checkNull = false;
        this.check = true;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '*Invalid Email or Password!',
        })
      }
    })
  }
}
