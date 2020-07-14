import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: any;

  constructor(
    private httpClient:HttpClient,
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    this.httpClient.get(environment.userUri + '/admins')
    .subscribe((users) => {
      this.users = users;
    });
  }

  deleteUser(id) {
    this.httpClient.delete(environment.userUri + '/' + id)
    .subscribe(() => {
      console.log("User is Deleted");
    });
  }

}
