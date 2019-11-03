import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-result-btn',
  templateUrl: './result-btn.component.html',
  styleUrls: ['./result-btn.component.scss'],
})
export class ResultBtnComponent implements OnInit {

  @Input() color: string = '#AAA';

  click = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  clickEvent() {
    this.click.emit("result-button-pressed");
  }
}
