import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTableComponent } from './my-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyTableComponent],
  exports: [MyTableComponent]
})
export class MyTableModule { }

