import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/delay';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  public user: IUserData[];
  public id;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    console.log(this.route);
    // this.id = this.route.snapshot.params['id'];
    // this.id ? this.getUserData(this.id) : this.getUserData(1);
    // if (this.id) {
    //   this.getUserData(this.id);
    // }
    // this.route.data.subscribe(x => { console.log(x); });

    this.route.data.subscribe((x) => {
      console.log(x);
      this.user = this.parseData(x.profile[0]);
    });

    console.log(this.route);
  }

  getUserData(id = 1) {
    this.dataService
      .fetchDataById(id)
      .delay(5000)
      .subscribe(data => {
        console.log(data);
        this.user = this.parseData(data[0]);
      });
  }

  parseData(data): Array<any> {
    const parsedData: IUserData[] = [];

    for (const item in data) {
      if (item) {
        parsedData.push({ lable: item, data: data[item] });
      }
    }

    return parsedData;
  }

}

export interface IUserData {
  lable: string;
  data: string;
}
