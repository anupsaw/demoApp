import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  isTrue: boolean;
  names: Array<any>;
  constructor() {
    this.isTrue = true;
    this.names = ['Anup', 'Mohan', 'Manali'];
   }

  ngOnInit() {
  }

  trackByFn(index, item) {
   // console.log(index, item);
    return index; // or item.id
  }

}
