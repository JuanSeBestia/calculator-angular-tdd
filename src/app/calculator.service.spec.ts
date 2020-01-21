import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service).toBeTruthy();
  });


  it('should set the currentValue value', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    const value = '123';
    service.setCurrentValue(value);
    expect(value === service.getCurrentValue()).toBe(true);
  });

  it('should return 0 if the expression is empty', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    const value = '';
    service.setCurrentValue(value);
    expect(service.getResult()).toBe('');
  });

  it('should return the mathematical value expression of currentValue', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    const value = '2+2';
    service.setCurrentValue(value);
    expect(service.getResult()).toBe('4');
  });


  it('should return "Syntax Error" if the mathematical expression is invalid', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    const value = '2+2*0.6.6';
    service.setCurrentValue(value);
    expect(service.getResult()).toEqual('Syntax Error');
  });


  it('should contain a new value after the value "Sintax Error is Displayed"', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    service.setCurrentValue('Syntax Error9');
    expect(service.getResult().includes('Syntax Error')).toBe(false);
  });
});
