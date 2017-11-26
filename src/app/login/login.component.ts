import { Component, OnInit } from '@angular/core';
import { Router, RouterState } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: object;
  constructor(private userService: UserService, private router: Router) {
    this.user = {};
   }


  ngOnInit() {
  }

  login() {
    this.userService.login(this.user);
  }

}
