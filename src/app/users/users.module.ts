

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingComponents, UsersRouterModule } from './user-router';
import { ProfileResolver } from './profile/profile-resolve.service';
import { UsersListComponent } from './users-list/users-list.component';
import { DataService } from '../services/data.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRouterModule
  ],
  declarations: [UserRoutingComponents, UsersListComponent],
  providers: [ProfileResolver, DataService]

})
export class UsersModule { }
