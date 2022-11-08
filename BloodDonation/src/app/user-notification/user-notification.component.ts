import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-notification',
  templateUrl: './user-notification.component.html',
  styleUrls: ['./user-notification.component.css']
})
export class UserNotificationComponent implements OnInit {

  constructor(private service: UserService, private route: Router) { }
  request: any;
  tempRequest: any = [];
  sample: any;
  ngOnInit(): void {
    this.service.allRequest().subscribe((data) => {
      this.request = data;
      for (var val of this.request) {
        if (val.response == "No" && val.responseUserName == null) {
          this.tempRequest.push(val);
        }
      }
    });
  }
  user: any;
  userDetails: any;
  getResponse: any;
  accept(id: any, data: any) {;
    this.userDetails = this.service.localStorage();
    this.getResponse = JSON.parse(data);
    this.getResponse.response = "Yes";
    this.getResponse.responseUserName = this.userDetails.name;
    this.service.requestResponse(this.getResponse, id).subscribe();
    this.route.navigate(['user']);
  }
}
