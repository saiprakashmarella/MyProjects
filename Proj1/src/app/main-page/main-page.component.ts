import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { User } from './User';
import { login } from './login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  user = "saiprakash";
  pswd = "marella";
  UserModel = new User('Rob', '123453', 'saosi@gmail.com', 12323222, true);
  log = new login("", "", false);



  constructor(private router: Router) { }

  ngOnInit() {
    $(document).ready(function () {
      $("#login_submit").click(function () {
        if (($("#email").val() == 'Sai') && ($("#password").val() == "sruthi")) {
          $("#LoginModal").hide();

        }
      });
    });

  }
  login() {
    //if(this.user=="sai" && this.pswd=="sruthi"){
    //this.router.navigate(['/mainpage',this.user]);*//
    if (this.log.user == "sai" && this.log.password == "sruthi") {
      this.router.navigate(['/mainpage', { user: this.log.user }]);
    }
  }

}


