import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../api/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  valChange = 0;
  users: Array<object>;
  constructor(private api: ApiService) { }

  onChange() {
    this.valChange++;
    console.log('onchange')
  }

  ngOnInit(): void {
    this.api.getUsers().subscribe((users) => {
      this.users = users;
    })
  }
}
