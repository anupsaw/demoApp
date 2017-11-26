import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  public user: any;
  constructor(private dataService: DataService) {
    this.user = {};
   }

  ngOnInit() {
  }

  register(user) {
    this.dataService.postData(user.value).subscribe((data) => console.log(data));
  }

}



export interface IUser {
  id: any;
  email: string;
  name: string;
  dob?: Date;
  username: string;
  phone: string;
}
