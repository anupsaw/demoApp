import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from './services/data.service';
import { ViewchildComponent } from './viewchild/viewchild.component';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppCopyComponent implements OnInit, AfterViewInit {

  title = 'app';
  testObje = {
    'id': 0, 'name': 'Hercules', 'emotion': 'happy',
    'birthdate': '1970-02-25T08:00:00.000Z',
    'url': 'http://www.imdb.com/title/tt0065832/',
    'rate': 325
  };

  @ViewChild(ViewchildComponent) childComp: ViewchildComponent;

  constructor(private dataService: DataService, private cd: ChangeDetectorRef) {
    // this.postValue();
    // this.callSite();
    // this.dataService.getData().su
  }

  ngOnInit() {
    console.log(this.childComp);
    this.dataService.myObservable().subscribe(this.onSuccess);
  }

  getData() {
    this.dataService
      .fetchDataById(1)
      .delay(5000)
      .subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      });
  }

  postData() {
    this.dataService.postData({ name: 'anup' }).subscribe(this.onSuccess);
  }

  getData1() {
    this.dataService
      .fetchDataById(1)
      .subscribe(this.onSuccess, this.onError);
  }

  getDataWithRetry() {
    this.dataService
      .fetchDataById(1)
      .retry(3)
      .subscribe(this.onSuccess, this.onError);
  }

  private onSuccess(data) {
    console.log(data);
  }

  private onError(err) {
    console.log(err);
  }

  ngAfterViewInit() {
    console.log(this.childComp);
    this.childComp.myValue.text = 'Changed by Parent';
    this.childComp.refresh();
  }

  postValue() {
    // this.http.post('/posts', {
    //   id: 102,
    //   title: 'Anup Saw',
    //   body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderitm sunt rem eveniet architecto'
    // }).subscribe(function (res) {
    //   console.log(res);
    // });
  }
}
