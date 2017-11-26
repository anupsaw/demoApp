import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';


function zipLenhth(c: AbstractControl): { [key: string]: boolean } | null {

  if (c.value) {
    if (c.value.toString().length !== 5) {
      return { 'ziplength': true };
    }
  }
  return null;
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() hideSubmit: boolean;
  public address: any;
  addForm: FormGroup;
  states: Array<string>;
  constructor() {
    this.address = {};
    this.states = ['Maharashtra', 'Madhya Pradesh', 'Jharkhand', 'Karnataka'];
  }

  save(address) {
    console.log(this.addForm);
  }

  ngOnInit() {  
    this.addForm = new FormGroup({
      address1: new FormControl('balewadi', Validators.required),
      address2: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl(null, Validators.required),
      zip: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+$'), zipLenhth])
    });


  }

}


export interface IAddress {
  address1: string;
  address2: string;
  state: string;
  city: string;
  zip: number;

}
