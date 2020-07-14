import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;

  constructor(
    private httpClient:HttpClient,
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    this.httpClient.get(environment.userUri + '/customers')
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
