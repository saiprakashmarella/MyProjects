  import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserModel = new User('Rob','123453','saosi@gmail.com',12323222,true);
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.UserModel);
  }

}
