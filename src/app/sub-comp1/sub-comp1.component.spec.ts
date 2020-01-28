import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComp1Component } from './sub-comp1.component';

describe('SubComp1Component', () => {
  let component: SubComp1Component;
  let fixture: ComponentFixture<SubComp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubComp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
