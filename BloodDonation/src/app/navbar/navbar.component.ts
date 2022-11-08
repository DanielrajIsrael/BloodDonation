import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear();
    this.route.navigate(['']);
  }
  data: any;
  userDetails: any;
  home() {
    this.data = localStorage.getItem('user');
    this.userDetails = JSON.parse(this.data);
    if (this.userDetails.role == "User") {
      this.route.navigate(['/user']);
    } else if (this.userDetails.role == "Admin") {
      this.route.navigate(['/admin']);
    }
  }
}
