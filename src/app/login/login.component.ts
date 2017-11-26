import { Component, OnInit } from '@angular/core';
import { Router, RouterState, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: object;
  private returnUrl;
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.user = {};
  }


  ngOnInit() {
    // reset login status
    this.userService.logout();

    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['redirectTo'] || '/';

    this.route.queryParams.subscribe((params) => {
      this.returnUrl = params['redirectTo'] || '/';
    });
  }

  login(formData) {
    console.log(formData);
    this.userService.login(this.user);
    this.router.navigate([this.returnUrl]);
  }

}
