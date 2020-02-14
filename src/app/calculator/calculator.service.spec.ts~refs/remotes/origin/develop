import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { appReducers } from '../store/reducers/app.reducers';
import { StoreModule, Store } from '@ngrx/store';
import { AddOperatorValue, SetResultValue, ClearValue, UpdateUserName } from '../store/actions/calculator.actions';
import { CalculatorState } from '../store/state/calculator.state';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from '../store/state/app.state';

describe('CalculatorService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule, StoreModule.forRoot(appReducers), ] });
  });

  it('should be created', () => {
    const service = TestBed.get(CalculatorService);
    expect(service).toBeTruthy();
  });


  it('should disptach AddOperatorAction with 1', () => {
    const expectedAction = new AddOperatorValue('1');
    const store = jasmine.createSpyObj<Store<AppState>>('store', ['dispatch']);

    const service = new CalculatorService(store);
    service.setCurrentValue('1');

    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('should disptach SetResultValue', () => {
    const expectedAction = new SetResultValue();
    const store = jasmine.createSpyObj<Store<AppState>>('store', ['dispatch']);

    const service = new CalculatorService(store);
    service.getResult();

    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('should disptach ClearValue', () => {
    const expectedAction = new ClearValue();
    const store = jasmine.createSpyObj<Store<AppState>>('store', ['dispatch']);

    const service = new CalculatorService(store);
    service.clean();

    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('should disptach UpdateUsername', () => {
    const expectedAction = new UpdateUserName('Test');
    const store = jasmine.createSpyObj<Store<AppState>>('store', ['dispatch']);

    const service = new CalculatorService(store);
    service.updateUsername('Test');

    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });

});
