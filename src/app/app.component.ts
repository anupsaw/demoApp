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
export class AppComponent implements OnInit, AfterViewInit {

  title = 'app';
  name  = 'anup saw';

  constructor(private dataService: DataService, private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
  }



  ngAfterViewInit() {

  }


}
