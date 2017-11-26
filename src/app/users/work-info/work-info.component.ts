import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-work-info',
  templateUrl: './work-info.component.html',
  styleUrls: ['./work-info.component.scss']
})
export class WorkInfoComponent implements OnInit {

  workInfo: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.workInfo = this.fb.group({
      companyName: '',
      companyLocation: '',
      jobTitle: '',
      address: this.fb.group({
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
      })

    });

  }

  save() {
    console.log(this.workInfo);
  }

}
