import { Component, OnInit, Input } from '@angular/core';
import { CalculatorDataModel } from '../../calculator/models/calulator-model';

@Component({
  selector: 'app-math-operations-list',
  templateUrl: './math-operations-list.component.html',
  styleUrls: ['./math-operations-list.component.scss'],
})
export class MathOperationsListComponent implements OnInit {

  @Input() items: Array<CalculatorDataModel>;

  constructor() { }

  ngOnInit() {
  }
}
