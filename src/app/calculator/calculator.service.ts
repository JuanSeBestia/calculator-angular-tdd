import { Injectable } from '@angular/core';
import { AppState } from '../store/state/app.state';
import { Store } from '@ngrx/store';
import { AddOperatorValue, SetResultValue, ClearValue, UpdateUserName } from '../store/actions/calculator.actions';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(public store$: Store<AppState>) {
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
