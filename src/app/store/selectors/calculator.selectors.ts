import { createSelector } from "@ngrx/store";
import { AppState } from '../state/app.state';
import { CalculatorState } from '../state/calculator.state';


const operations = (state: AppState) => state.calculator;

export const selectOperations = createSelector(
    operations,
    (state: CalculatorState) => state.operations
);

const currentOperation = (state: AppState) => state.calculator;

export const selectCurrentOperation = createSelector(
    currentOperation,
    (state: CalculatorState) => state.currentOperation
);