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

// const userRoutes: Routes = [
//   {
//     path: '', component: UsersComponent,
//     children: [
//       { path: 'login', component: LoginComponent, outlet: 'login-outlet' },
//       { path: 'profile', component: ProfileComponent, data: { name: 'anup' }, resolve: { profile: ProfileResolver } },
//       { path: 'profile/:id', component: ProfileComponent },
//       { path: 'recover-password', component: RecoverPasswordComponent },
//       { path: 'usersList', component: UsersListComponent },
//       { path: 'register', component: RegisterComponent },
//     ]
//   }
// ];

const userRoutes: Routes = [
  {
    path: 'users', component: UsersComponent,
    children: [
      // { path: 'profile', component: ProfileComponent, data: { name: 'anup' }, resolve: { profile: ProfileResolver } },
      {
        path: 'profile', component: ProfileComponent, children: [
          { path: 'login', component: LoginComponent, outlet: 'login' },
          { path: 'recover-password', component: RecoverPasswordComponent, outlet: 'password'  },
        ]
      },
      { path: 'profile/:id', component: ProfileComponent },

      { path: 'usersList', component: UsersListComponent },
      { path: 'register', component: RegisterComponent },
    ]
  }
];


// const userRoutes: Routes = [
//   {
//     path: '', component: UsersComponent,
//     children: [
//       { path: 'login', component: LoginComponent, outlet: 'login' },
//       { path: 'profile', component: ProfileComponent, outlet: 'profile', data: { name: 'anup' }, resolve: { profile: ProfileResolver } },
//       { path: 'profile/:id', component: ProfileComponent },
//       { path: 'recover-password', component: RecoverPasswordComponent, outlet: 'password' },
//       { path: 'usersList', component: UsersListComponent, outlet: 'userlist' },
//       { path: 'register', component: RegisterComponent, outlet: 'register' },
//     ]
//   }
// ];

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
