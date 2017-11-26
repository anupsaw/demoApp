import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

    private userLoggedIn: boolean;
    private user: any;
    constructor(private http: HttpClient) {
        this.userLoggedIn = false;
    }

    login(user) {
        this.user = user;
        this.userLoggedIn = true;
    }

    logout() {
        this.user = null;
        this.userLoggedIn = false;
    }

    isUserLoggedIn() {
        return this.userLoggedIn;
    }

    getUserName() {
        return this.user ? this.user.name : null;
    }

}
