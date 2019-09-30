import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-number-button',
  templateUrl: './number-button.component.html',
  styleUrls: ['./number-button.component.scss'],
})

export class NumberButtonComponent implements OnInit {
  
  @Input() value: string;

  constructor() {
  }


  ngOnInit() {
    this.validateInput();
  }


  validateInput() {
    let validInputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    if (validInputs.findIndex(item => item === this.value) != -1) {
      this.value = this.value;
    }
    else {
      this.value = '';
    }
  }

  clickEvent() {

  }
}
