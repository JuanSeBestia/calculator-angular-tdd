import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalculatorModel, CalculatorDataModel } from '../calculator/models/calulator-model';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  mathOperations$: Observable<CalculatorModel>;
  items: CalculatorModel;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.getItems();
  }


  changePage(page) {
    this.getItems(page);
  }


  getItems(page = 0) {
    const params = { page: page + '' };
    this.mathOperations$ = this.requestService.getMathOperationsList(params);

    this.mathOperations$.subscribe((calcData: CalculatorModel) => {
      this.items = calcData;
    });
  }
}
