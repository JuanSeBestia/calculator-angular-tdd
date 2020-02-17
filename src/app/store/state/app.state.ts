import { CalculatorState, initialCalculatorState } from './calculator.state';
import { PaginatorState, initialPaginatorState } from './paginator.state';
import { RouterReducerState } from '@ngrx/router-store';

export interface AppState {
    router?: RouterReducerState;
    calculator: CalculatorState;
    paginator: PaginatorState;
}

export const initialAppState: AppState = {
    calculator: initialCalculatorState,
    paginator: initialPaginatorState,
};

export function getInitialState(): AppState {
    return initialAppState;
}
