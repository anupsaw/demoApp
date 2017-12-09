import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateList2Component } from './animate-list2.component';

describe('AnimateList2Component', () => {
  let component: AnimateList2Component;
  let fixture: ComponentFixture<AnimateList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
