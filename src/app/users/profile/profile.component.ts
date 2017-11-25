import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  public user: IUserData[];
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    console.log(this.route);
    this.route.data.subscribe(x => { console.log(x); });
  }

  getUserData() {
    this.dataService
      .fetchDataById(3)
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
