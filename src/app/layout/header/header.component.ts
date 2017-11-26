import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date = new Date();
  userName;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userName = this.userService.getUserName();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }


  isLoggedIn() {
    if (this.userService.isUserLoggedIn()) {
      this.userName = this.userService.getUserName();
      return true;
    } else {
      return false;
    }
  }

}
