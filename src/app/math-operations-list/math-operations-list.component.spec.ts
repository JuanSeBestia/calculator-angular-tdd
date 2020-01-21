import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathOperationsListComponent } from './math-operations-list.component';

describe('MathOperationsListComponent', () => {
  let component: MathOperationsListComponent;
  let fixture: ComponentFixture<MathOperationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathOperationsListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathOperationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
