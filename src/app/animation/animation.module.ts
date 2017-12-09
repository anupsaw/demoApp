import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateButtonComponent } from './animate-button/animate-button.component';
import { AnimateListComponent } from './animate-list/animate-list.component';
import { AnimateList2Component } from './animate-list2/animate-list2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnimateButtonComponent, AnimateListComponent, AnimateList2Component],
  exports: [AnimateButtonComponent, AnimateListComponent, AnimateList2Component]
})
export class AnimationModule { }
