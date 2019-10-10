import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-number-button',
  templateUrl: './number-button.component.html',
  styleUrls: ['./number-button.component.scss'],
})

export class NumberButtonComponent implements OnInit {

  @Input() value: string;
  @Input() color = 'eee';

  @Output()
  numberClick = new EventEmitter<string>();

  constructor() {
  }


  ngOnInit() {
    this.validateInput();
  }


  validateInput() {
    const validInputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'x', '-', '+', '/', '.'];
    if (validInputs.findIndex(item => item === this.value) !== -1) {
      this.value = this.value;
    } else {
      this.value = '';
    }
  }

  clickEvent() {
    this.numberClick.emit(this.value);
  }
}
