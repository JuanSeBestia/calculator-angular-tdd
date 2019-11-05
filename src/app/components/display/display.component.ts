import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  EventEmitter,
  Output
} from '@angular/core';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit, OnChanges {

  @Input() currentValue: string;

  @Output()
  changeCurrentValue = new EventEmitter<null>();

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    this.changeCurrentValue.emit();
  }

}
