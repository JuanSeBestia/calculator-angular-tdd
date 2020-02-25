import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { reducerPaginator } from './paginator.reducers';
import { reducerCalculator } from './calculator.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
    router: routerReducer,
    paginator: reducerPaginator,
    calculator: reducerCalculator,
};
