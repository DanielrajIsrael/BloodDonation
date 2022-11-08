import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor(private service: UserService, private route: Router) { }
  request: any = {
    hospitalName: '',
    bloodNeed: "-Select BloodGroup-",
    contactNumber: '',
    response: 'No',
    status: '-Select Status-',
  }

  ngOnInit(): void {
  }
  sentRequest() {
    this.service.sentAllRequest(this.request).subscribe();
    this.route.navigate(['admin']);
  }
}
