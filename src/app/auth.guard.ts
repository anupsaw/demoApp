import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('I am called');
    console.log(next);
    if (this.userService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login'], { queryParams: { redirectTo: state.url } });
      return false;
    }
  }
}


class Test implements CanActivate {

  canActivate() {
    return true;
  }
}
