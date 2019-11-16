import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'
import { RegisterService } from './register.service';
import {IUser} from '../../interfaces/IUser'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
 model: User;
 submitted: boolean = false;    
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.model = new User(); 
  }

  onSubmit(){ 
    this.submitted = true;
    this.registerService.register(this.model).subscribe( (user:IUser) => { 
      this.model = user;
    });
  }

}
