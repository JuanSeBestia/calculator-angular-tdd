import { Action } from '@ngrx/store';
import { PaginationInformation } from 'src/app/calculator/models/calulator-model';


export enum EUPaginatorActions {
    GetPaginator = '[Paginator] Get Paginator',
    GetPaginatorSuccess = '[Paginator] Get Paginator Success',
    GetPaginatorError = '[Paginator] Get Paginator Error',
}

export class GetPaginator implements Action {
    public readonly type = EUPaginatorActions.GetPaginator;
}

export class GetPaginatorSuccess implements Action {
    public readonly type = EUPaginatorActions.GetPaginatorSuccess;
    constructor(public payload: PaginationInformation) { }
}

export class GetPaginatorError implements Action {
    public readonly type = EUPaginatorActions.GetPaginatorError;
    constructor(public payload: string) { } // Error String
}

export type PaginatorActions = GetPaginator | GetPaginatorSuccess | GetPaginatorError;
