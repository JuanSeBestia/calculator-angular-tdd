import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalculatorModel } from '../calulator-model';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-math-operations-list',
  templateUrl: './math-operations-list.component.html',
  styleUrls: ['./math-operations-list.component.scss'],
})
export class MathOperationsListComponent implements OnInit {

  mathOperations$: Observable<CalculatorModel>;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.mathOperations$ = this.requestService.getMathOperationsList();

    this.mathOperations$.subscribe(items => console.log(items));
  }

}
