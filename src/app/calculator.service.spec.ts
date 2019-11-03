import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service).toBeTruthy();
  });


  it('should have a function that sets the currentValue value', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service.setCurrentValue != undefined).toBeTruthy();
  });

  it('should set the currentValue value', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let value = "123";
    service.setCurrentValue(value)
    expect(value === service.getCurrentValue()).toBe(true);
  });


  it('should have a function that returns the currentValue value', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service.getCurrentValue != undefined).toBeTruthy();
  });


  it('should have a function that examines if the value of currentValue is valid', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service.validateInput != undefined).toBeTruthy();
  });


/*   it('should examine if the mathematical syntax value of currentValue is valid', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let value = "9*1-4*9.7";
    expect(service.validateInput(value)).toBe(true);
  });
 */

/*   it('should examine if the mathematical syntax value of currentValue is not valid', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let value = "9*1-4*9.7.5";
    expect(service.validateInput(value)).toBe(false);
  });
 */

  it('should have a function that evaluate the value expression of currentValue', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service.evaluateValue != undefined).toBeTruthy();
  });

  it('should have a function that returns the mathematical value expression of currentValue', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service.getResult != undefined).toBeTruthy();
  });


  it('should returns the mathematical value expression of currentValue', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let value = "2+2";
    service.setCurrentValue(value);
    expect(service.getResult() === "4").toBe(true);
  });

  /* it('should return "Syntax Error" if the mathematical expression is invalid', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let value = "2+2*0.6.6";
    service.setCurrentValue(value);
    expect(service.getResult() === "Syntax Error").toBe(true);
  }); */
});
