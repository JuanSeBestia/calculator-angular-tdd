import { Injectable } from '@angular/core';
import * as math from 'mathjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private currentValue: string = "";

  constructor() { }

  setCurrentValue(value) {
    this.currentValue = value;
  }


  getCurrentValue(): string {
    return this.currentValue;
  }


  validateInput(value): boolean {
    return /^((\-)?(\d+\.?\d*)+([\+\-\*\/]{1}(\d+\.?\d*)*)*)+/.test(value);
  }


  evaluateValue(value) {
    let expression = math.evaluate(value);
    this.setCurrentValue(expression + '');
  }


  getResult(): string {
    //if (this.validateInput(this.currentValue)) {
    this.evaluateValue(this.currentValue);
    return this.getCurrentValue();
    //}
    /* else {
      return "Syntax Error";
    } */
  }


  clean() {
    this.setCurrentValue("");
    return this.getCurrentValue();
  }
}
