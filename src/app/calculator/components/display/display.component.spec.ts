import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';
import { CalculatorDataModel } from '../../models/calulator-model';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render current value as 0', async () => {
    let mockOperation: CalculatorDataModel = {
      math_operation: '0',
      result: '',
      username: '',
    }
    component.currentValue = mockOperation;
    fixture.detectChanges();
    const compontentNe = fixture.debugElement.nativeElement;
    expect(compontentNe.querySelector('.displayValue').textContent).toContain('0');
  });

  it('should render current value as 1+2', async () => {
    let mockOperation: CalculatorDataModel = {
      math_operation: '1+2',
      result: '',
      username: '',
    }
    component.currentValue = mockOperation;
    fixture.detectChanges();
    const componentNe = fixture.debugElement.nativeElement;
    expect(componentNe.querySelector('.displayValue').textContent).toContain('1+2');
  });

  it('should render current value as an empty string \'\'', async () => {
    component.currentValue = null;
    fixture.detectChanges();
    const componentNe = fixture.debugElement.nativeElement;
    expect(componentNe.querySelector('.displayValue').textContent).toEqual('');
  });


  it('should render current value as an empty string \'\'', async () => {
    component.currentValue = undefined;
    fixture.detectChanges();
    const componentNe = fixture.debugElement.nativeElement;
    expect(componentNe.querySelector('.displayValue').textContent).toEqual('');
  });
});
