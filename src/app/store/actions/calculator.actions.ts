import { Action } from '@ngrx/store';
import { CalculatorDataModel } from 'src/app/calculator/models/calulator-model';

export enum EUCalculatorActions {
    CreateOperation = '[Calculator] Create Operation',
    CreateOperationSuccess = '[Calculator] Create Operation Success',
    CreateOperationError = '[Calculator] Create Operation Error',
    AddOperatorValue = '[Calculator] Add Operator Value',
    SetResultValue = '[Calculator] Set the result of the operation',
    SetResultValueSuccess = '[Calculator] Set the result of the operation success',
    SetResultValueError = '[Calculator] Set the result of the operation error',
    ClearValue = '[Calculator] Set Value as empty',
    NoAction = "[Calculator] Set no action",
    UpdateUsername = '[Calculator] UpdateUserName', 
}

export class CreateOperation implements Action {
    public readonly type = EUCalculatorActions.CreateOperation;
    constructor(public payload: CalculatorDataModel) { }
}

export class CreateOperationSuccess implements Action {
    public readonly type = EUCalculatorActions.CreateOperationSuccess;
    constructor(public payload: CalculatorDataModel) { }
}

export class CreateOperationError implements Action {
    public readonly type = EUCalculatorActions.CreateOperationError;
    constructor(public payload: CalculatorDataModel) { }
}


export class AddOperatorValue implements Action {
    public readonly type = EUCalculatorActions.AddOperatorValue;
    constructor(public value: string) { }
}


export class SetResultValue implements Action {
    public readonly type = EUCalculatorActions.SetResultValue;
}

export class SetResultValueSuccess implements Action {
    public readonly type = EUCalculatorActions.SetResultValueSuccess;
    constructor(public result: string) { }
}


export class SetResultValueError implements Action {
    public readonly type = EUCalculatorActions.SetResultValueError;
    constructor(public error: string) { }
}


export class ClearValue implements Action {
    public readonly type = EUCalculatorActions.ClearValue;
}

export class NoAction implements Action {
    public readonly type = EUCalculatorActions.NoAction;
}

export class UpdateUserName implements Action {
    public readonly type = EUCalculatorActions.UpdateUsername;
    constructor(public username: string){}
}

export type CalculatorActions = CreateOperation | CreateOperationSuccess | CreateOperationError |
    ClearValue | SetResultValue | SetResultValueError | SetResultValueSuccess | AddOperatorValue | UpdateUserName;