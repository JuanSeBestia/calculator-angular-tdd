import { Injectable } from '@angular/core';
import * as math from 'mathjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private currentValue = '';

  constructor() { }


  setCurrentValue(value: string) {
    if (value.includes('Syntax Error')) {
      value = value.replace('Syntax Error', '');
    }
    this.currentValue = value;
  }


  getCurrentValue(): string {
    return this.currentValue;
  }


  evaluateValue(value) {
    if (value.length === 0) {
      this.setCurrentValue('');
    } else {
      const expression = math.evaluate(value);
      this.setCurrentValue(expression + '');
    }
  }


  getResult(): string {
    try {
      this.evaluateValue(this.currentValue);
      return this.getCurrentValue();
    } catch (error) {
      console.error('CalculatorService::getResult(), Error', error);
      this.currentValue = 'Syntax Error';
      return this.getCurrentValue();
    }
  }


  clean() {
    this.setCurrentValue('');
    return this.getCurrentValue();
  }
}
