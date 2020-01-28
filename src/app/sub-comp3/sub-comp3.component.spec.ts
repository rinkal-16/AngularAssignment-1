import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComp3Component } from './sub-comp3.component';

describe('SubComp3Component', () => {
  let component: SubComp3Component;
  let fixture: ComponentFixture<SubComp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubComp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubComp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
