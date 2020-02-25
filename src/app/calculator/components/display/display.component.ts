import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { CalculatorDataModel } from '../../models/calulator-model';
import { Observer } from 'rxjs';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {

  @Input() currentValue: CalculatorDataModel;

  constructor() { }

  ngOnInit() {
  }

}
