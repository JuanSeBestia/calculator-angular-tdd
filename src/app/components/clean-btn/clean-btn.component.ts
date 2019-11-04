import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clean-btn',
  templateUrl: './clean-btn.component.html',
  styleUrls: ['./clean-btn.component.scss'],
})
export class CleanBtnComponent implements OnInit {
  @Input() color = '#232323';

  click = new EventEmitter<null>();

  constructor() { }

  ngOnInit() { }

  clickEvent() {
    this.click.emit();
  }
}
