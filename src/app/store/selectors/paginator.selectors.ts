import { createSelector } from "@ngrx/store";
import { AppState } from '../state/app.state';
import { CalculatorState } from '../state/calculator.state';
import { PaginatorState } from '../state/paginator.state';


const paginator = (state: AppState) => state.paginator;

export const selectPaginator = createSelector(
    paginator,
    (state: PaginatorState) => state.paginator
);