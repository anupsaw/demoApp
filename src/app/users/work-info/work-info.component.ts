import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-work-info',
  templateUrl: './work-info.component.html',
  styleUrls: ['./work-info.component.scss']
})
export class WorkInfoComponent implements OnInit {

  workInfo: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    // this.addForm = new FormGroup({
    //   address1: new FormControl('balewadi', [Validators.required]),
    //   address2: new FormControl('Test', Validators.required),
    //   city: new FormControl(''),
    //   state: new FormControl(null, Validators.required),
    //   zip: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+$'), zipLenhth])
    // });
    this.workInfo = this.fb.group({
      companyName: ['', Validators.required],
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
