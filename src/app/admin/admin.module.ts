import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRouterModule } from './admin.router';

@NgModule({
  imports: [
    CommonModule,
    AdminRouterModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
