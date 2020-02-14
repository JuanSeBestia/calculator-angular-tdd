import { Injectable } from "@angular/core";
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
    NoAction,
} from '../actions/calculator.actions';
import { switchMap, map, catchError, withLatestFrom, filter, tap, mergeMap } from 'rxjs/operators';
import { CalculatorDataModel } from 'src/app/calculator/models/calulator-model';
import { of } from 'rxjs';
import { RequestService } from 'src/app/request.service';
import * as math from 'mathjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectCurrentOperation } from '../selectors/calculator.selectors';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable()
export class CalculatorEffects {

    constructor(private actions$: Actions, public requestService: RequestService, public store$: Store<AppState>) {

    }

    @Effect()
    createOperation$ = this.actions$.pipe(
        ofType<CreateOperation>(EUCalculatorActions.CreateOperation),
        switchMap((action) => {
            return this.requestService.createMathOperation(action.payload).pipe(
                map((operation: CalculatorDataModel) => new CreateOperationSuccess(operation)),
                catchError(error => of(new CreateOperationError(error))
                ));
        }
        ),
    )

    @Effect()
    setResult$ = this.actions$.pipe(
        ofType<SetResultValue>(EUCalculatorActions.SetResultValue),
        withLatestFrom(this.store$),
        map(([action, state]) => {
            return state.calculator.currentOperation;
        }),
        switchMap((currentOperation: CalculatorDataModel) => {
            try {
                let result = math.evaluate(currentOperation.math_operation);                
                return [
                    new SetResultValueSuccess(result),
                    /* new ClearValue(), */
                    new AddOperatorValue(result),
                    new CreateOperation(currentOperation),
                ]
            }
            catch (error) {
                return [new SetResultValueError('Syntax Error')];
            }
        }),
    )

/* 
    @Effect()
    resetValueIfError = this.actions$.pipe(
        ofType<AddOperatorValue>(EUCalculatorActions.AddOperatorValue),
        withLatestFrom(this.store$),
        map(([action, state]) => {
            return state.calculator.currentOperation;
        }),
        map((currentOperation: CalculatorDataModel) => {
            if (currentOperation.math_operation.indexOf('Syntax Error') > -1) {
                return new ClearValue();
            }
            return new NoAction();
        })
    ) */
}