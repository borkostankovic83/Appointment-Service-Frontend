import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vet',
  templateUrl: './vet.component.html',
  styleUrls: ['./vet.component.css']
})
export class VetComponent implements OnInit {
  users: any;

  constructor(
    private httpClient:HttpClient,
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    this.httpClient.get(environment.userUri + '/vets')
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
