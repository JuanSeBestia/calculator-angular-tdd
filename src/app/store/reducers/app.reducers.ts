import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { paginatorReducers } from './paginator.reducers';
import { calculatorReducers } from './calculator.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
    router: routerReducer,
    paginator: paginatorReducers,
    calculator: calculatorReducers,
};
