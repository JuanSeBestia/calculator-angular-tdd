import { Injectable } from '@angular/core';
import { AppState } from '../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { CreateOperation, AddOperatorValue, SetResultValue, ClearValue, UpdateUserName } from '../store/actions/calculator.actions';
import { selectCurrentOperation } from '../store/selectors/calculator.selectors';
import { CalculatorDataModel } from './models/calulator-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  mathOperation$: Observable<CalculatorDataModel>;
  private model: CalculatorDataModel;

  constructor(public store$: Store<AppState>) {
    this.mathOperation$ = this.store$.pipe(select(selectCurrentOperation));

    this.mathOperation$.subscribe(info => {
      this.model = info;
    });
  }


  setCurrentValue(value: string) {
    this.store$.dispatch(new AddOperatorValue(value))
  }

  getResult() {
    this.store$.dispatch(new SetResultValue())
  }

  clean() {
    this.store$.dispatch(new ClearValue())
  }


  updateUsername(name) {
    this.store$.dispatch(new UpdateUserName(name));
  }
}
