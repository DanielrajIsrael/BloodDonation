import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  constructor(private service: UserService) { }
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  allRequest: any;
  respondedRequest: any = [];
  pendingRequest: any = [];
  ngOnInit(): void {
this.getAllEmployee();
  }
  getAllEmployee(){
    this.respondedRequest=[];
    this.allRequest=[];
    this.service.allRequest().subscribe((data) => {
      this.allRequest = data;
      for (var val of this.allRequest) {
        if (val.response == "Yes" && val.responseUserName != null) {
          this.respondedRequest.push(val);
        } else if (val.response == "No" && val.responseUserName == null) {
          this.pendingRequest.push(val);
        }
      }
    })
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getAllEmployee();
  }
  check = true;
  response() {
    this.check = true;
  }
  pending() {
    this.check = false;
  }
}
