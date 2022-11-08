import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-response',
  templateUrl: './user-response.component.html',
  styleUrls: ['./user-response.component.css']
})
export class UserResponseComponent implements OnInit {

  constructor(private service: UserService) { }
  request: any;
  tempRequest: any = [];
  userDetails: any;
  check = false;
  ngOnInit(): void {
    this.userDetails = this.service.localStorage();
    this.service.allRequest().subscribe((data) => {
      this.request = data;
      for (var val of this.request) {
        if (val.response == "Yes" && val.responseUserName == this.userDetails.name) {
          this.tempRequest.push(val);
        }
      }
      if (this.tempRequest[0] == null) {
        this.check = true
      } else {
        this.check = false;
      }
    });
  }

}
