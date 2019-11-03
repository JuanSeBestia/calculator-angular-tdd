import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  displayValue: string;

  constructor(private calculatorService: CalculatorService, ) {
    this.displayValue = this.calculatorService.getCurrentValue();
  }

  updateDisplayValue(displayValue: string) {
    this.displayValue += displayValue;
    this.calculatorService.setCurrentValue(this.displayValue);
  }

  displayResult() {
    this.displayValue = this.calculatorService.getResult();
  }

  cleanDisplay() {
    this.displayValue = this.calculatorService.clean();
  }
}
