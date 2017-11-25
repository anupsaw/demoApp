
import { Component, OnInit } from '@angular/core';
import { MyTableHook } from './my-table.Abstract';
import { DataService } from '../services/data.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {

  constructor(public hook: MyTableHook, private dataService: DataService) {
    // super();
  }

  public user = [];
  ngOnInit() {
    this.callMe = this.hook.callMe;
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
    const parsedData = [];
    for (const item in data) {

      parsedData.push({ lable: item, data: data[item] })
    }

    return parsedData;
  }

  callMe() {

  }

}
