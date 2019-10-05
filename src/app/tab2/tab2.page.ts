import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  displayValue: string;
  validInput = '^((\-)?(\d+\.?\d*)+([\+\-x\/]{1}(\d+\.?\d*)*)*)+'

  constructor() {
    this.displayValue = '0';
  }

  updateDisplayValue(displayValue: string){
    this.displayValue += displayValue;
  }
}
