import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  displayValue: string;
  functionColor = '#ec9770';
  numberColor = '#fff';
  clearColor = '#ddd';

  name: string;

  defaultBgImage = 'url("/assets/images/cofee.jpeg")';

  constructor(private calculatorService: CalculatorService) {
    this.displayValue = this.calculatorService.getCurrentValue();
  }


  updateDisplayValue(displayValue: string) {
    this.displayValue += displayValue;
    this.calculatorService.setCurrentValue(this.displayValue);
    this.displayValue = this.calculatorService.getCurrentValue();
  }


  displayResult() {
    this.displayValue = this.calculatorService.getResult();
    this.saveResult();
  }


  cleanDisplay() {
    this.displayValue = this.calculatorService.clean();
  }


  saveResult() {
    if (this.name && this.name.length > 0)
      this.calculatorService.saveResult(this.name);
  }
}
