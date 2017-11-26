

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingComponents, UsersRouterModule } from './user-router';
import { ProfileResolver } from './profile/profile-resolve.service';
import { UsersListComponent } from './users-list/users-list.component';
import { DataService } from '../services/data.service';
import { AddressComponent } from './address/address.component';
import { WorkInfoComponent } from './work-info/work-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRouterModule
  ],
  declarations: [UserRoutingComponents, UsersListComponent, AddressComponent, WorkInfoComponent],
  providers: [ProfileResolver, DataService]

})
export class UsersModule { }
