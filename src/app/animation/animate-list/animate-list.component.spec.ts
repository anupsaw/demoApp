import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateListComponent } from './animate-list.component';

describe('AnimateListComponent', () => {
  let component: AnimateListComponent;
  let fixture: ComponentFixture<AnimateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
