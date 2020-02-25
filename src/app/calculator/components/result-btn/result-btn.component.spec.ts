import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultBtnComponent } from './result-btn.component';

describe('ResultBtnComponent', () => {
  let component: ResultBtnComponent;
  let fixture: ComponentFixture<ResultBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultBtnComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be pressed', async () => {
    spyOn(component, 'clickEvent');

    const numberButtonNativeElement = fixture.debugElement.nativeElement;
    numberButtonNativeElement.querySelector('button').click();
    fixture.whenStable().then(() => {
      expect(component.clickEvent).toHaveBeenCalled();
    });
  });
});
