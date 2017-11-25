
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {


  public users: any[];
  public loading: boolean;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.myPromise().then(data => console.log(data));
  }

  getUserListProm() {
    this.users = null;
    this.loading = true;
    this.dataService
    .getData()
    .then(data => {this.users = data; this.loading = false; });
  }

  getUserListSub() {
    this.users = null;
    this.loading = true;
    this.dataService
      .fetchData()
      .delay(5000)
      .subscribe(data => {this.users = data; this.loading = false; });
  }


}


