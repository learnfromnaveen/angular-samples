import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from './models/IUser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: IUser[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }


  getUsers(): void{
    this.userService.getUsers().subscribe( users => { 
      this.users = users;
    });
  }

}
