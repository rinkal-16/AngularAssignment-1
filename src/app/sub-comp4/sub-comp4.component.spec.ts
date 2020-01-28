import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComp4Component } from './sub-comp4.component';

describe('SubComp4Component', () => {
  let component: SubComp4Component;
  let fixture: ComponentFixture<SubComp4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubComp4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubComp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
