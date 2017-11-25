import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RecoverPasswordComponent } from './recover-password//recover-password.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users.component';
import { ProfileResolver } from './profile/profile-resolve.service';
import { UsersListComponent } from './users-list/users-list.component';

// import { } from '../users';

const userRoutes: Routes = [
  {
    path: 'user', component: UsersComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent, data: { name: 'anup' }, resolve: { profile: ProfileResolver } },
      { path: 'recover-password', component: RecoverPasswordComponent },
      { path: 'usersList', component: UsersListComponent },
      { path: 'register', component: RegisterComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [RouterModule]
})
export class UsersRouterModule { }

export const UserRoutingComponents = [UsersComponent, ProfileComponent, UsersListComponent,
  LoginComponent, RegisterComponent, RecoverPasswordComponent];
