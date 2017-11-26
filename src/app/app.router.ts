import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterPreloader, PreloadAllModules, PreloadingStrategy } from '@angular/router';



import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RoutePreLoadStrategy } from './app.route.load.service';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';

// import { } from '../users';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: 'admin', component: AdminComponent },
  // { path: 'users', component: UsersComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
    // RouterModule.forRoot(appRoutes, { preloadingStrategy: RoutePreLoadStrategy })
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }

export const RoutingComponents = [HomeComponent, DashboardComponent, LoginComponent, AdminComponent];
