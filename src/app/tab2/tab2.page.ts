import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator/calculator.service';
import { AppState } from '../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectCurrentOperation } from '../store/selectors/calculator.selectors';
import { CalculatorDataModel } from '../calculator/models/calulator-model';
import { Observable, of, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap, map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  displayValue$: Observable<CalculatorDataModel>;
  functionColor = '#ec9770';
  numberColor = '#fff';
  clearColor = '#ddd';

  name: string;

  defaultBgImage = 'url("/assets/images/cofee.jpeg")';

  constructor(
    private calculatorService: CalculatorService,
    private store$: Store<AppState>,
  ) {
    this.displayValue$ = this.calculatorService.mathOperation$;

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


  updateUsername() {
    console.log("saving?", this.name);
    if (this.name && this.name.length > 0) {
      of(this.name).pipe(
        debounceTime(1000),
        tap((name) => {
          console.log(name, "Enterint,sdfsf");
          this.calculatorService.saveResult(this.name)
          //TODO fix to only update once
        })
      )
    }
  }

  ngOnInit() {
    //Here we are getting the current operation!
  }
}
