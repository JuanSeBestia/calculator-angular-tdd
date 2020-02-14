import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationInformation, CalculatorDataModel } from '../calculator/models/calulator-model';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  mathOperations$: Observable<PaginationInformation>;
  items: PaginationInformation;

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

    this.mathOperations$.subscribe((calcData: PaginationInformation) => {
      this.items = calcData;
    });
  }
}
