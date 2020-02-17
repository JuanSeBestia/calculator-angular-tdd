import { Component, ViewChild, ElementRef } from '@angular/core';
import { CalculatorService } from '../calculator/calculator.service';
import { AppState } from '../store/state/app.state';
import { Store, select, } from '@ngrx/store';
import { CalculatorDataModel } from '../calculator/models/calulator-model';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, filter } from 'rxjs/operators';
import { selectCurrentOperation } from '../store/selectors/calculator.selectors';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('input', { static: true, read: ElementRef }) input: ElementRef;
  displayValue$: Observable<CalculatorDataModel>;
  functionColor = '#ec9770';
  numberColor = '#fff';
  clearColor = '#ddd';

  name: string;

  defaultBgImage = 'url("/assets/images/cofee.jpeg")';

  constructor(
    private calculatorService: CalculatorService,
    private store: Store<AppState>,

  ) {
    this.displayValue$ = this.store.pipe(select(selectCurrentOperation));
  }

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup').pipe(
      filter(Boolean),
      debounceTime(150),
      distinctUntilChanged(),
      tap((text: any) => {
        this.calculatorService.updateUsername(this.input.nativeElement.value);
      })
    ).subscribe()
  }


  updateDisplayValue(displayValue: string) {
    this.calculatorService.setCurrentValue(displayValue);
  }


  displayResult() {
    this.calculatorService.getResult();
  }


  cleanDisplay() {
    this.calculatorService.clean();
  }
}
