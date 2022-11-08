import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private service: UserService) { }
  userData: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  ngOnInit(): void {
    this.getAllEmployee();
  }
  getAllEmployee(){
    this.service.getAllData().subscribe((data) => {
      this.userData = data;
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getAllEmployee();
  }



  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllEmployee();
  }
}
