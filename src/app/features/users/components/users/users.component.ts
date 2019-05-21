import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  valChange = 0;
  users: Array<object>;
  constructor(private userService: UserService) { }

  onChange() {
    this.valChange++;
    console.log('onchange')
  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((users) => {
      this.users = users;
    })
  }
}
