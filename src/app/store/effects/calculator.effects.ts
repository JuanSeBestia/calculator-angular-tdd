import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import {
    CreateOperation,
    EUCalculatorActions,
    CreateOperationSuccess,
    CreateOperationError,
    SetResultValue,
    SetResultValueError,
    SetResultValueSuccess,
    AddOperatorValue,
    ClearValue,
} from '../actions/calculator.actions';
import { switchMap, map, catchError, withLatestFrom, filter } from 'rxjs/operators';
import { CalculatorDataModel } from 'src/app/calculator/models/calulator-model';
import { of } from 'rxjs';
import { RequestService } from 'src/app/request.service';
import * as math from 'mathjs';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';

@Injectable()
export class CalculatorEffects {

    constructor(private actions$: Actions, public requestService: RequestService, public store$: Store<AppState>) {

    }

    @Effect()
    createOperation$ = this.actions$.pipe(
        ofType<CreateOperation>(EUCalculatorActions.CreateOperation),
        withLatestFrom(this.store$),
        map(([action, state]) => {
            return state.calculator.currentOperation;
        }),
        filter(currentOperation => currentOperation.username.length > 0),
        switchMap((currentOperation: CalculatorDataModel) => {
            return this.requestService.createMathOperation(currentOperation).pipe(
                map((operation: CalculatorDataModel) => new CreateOperationSuccess(operation)),
                catchError(error => of(new CreateOperationError(error))
                ));
        }
        ),
    );

    @Effect()
    setResult$ = this.actions$.pipe(
        ofType<SetResultValue>(EUCalculatorActions.SetResultValue),
        withLatestFrom(this.store$),
        map(([action, state]) => {
            return state.calculator.currentOperation;
        }),
        switchMap((currentOperation: CalculatorDataModel) => {
            try {
                const result = math.evaluate(currentOperation.math_operation);
                return [
                    new SetResultValueSuccess(result),
                    new CreateOperation(currentOperation),
                    new ClearValue(),
                    new AddOperatorValue(result),
                ];
            } catch (error) {
                return [new SetResultValueError('Syntax Error')];
            }
        }),
    );
}