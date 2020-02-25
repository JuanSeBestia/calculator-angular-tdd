import { CalculatorDataModel } from 'src/app/calculator/models/calulator-model';

export interface CalculatorState {
    operations: CalculatorDataModel[];
    currentOperation: CalculatorDataModel;
}

export const initialCalculatorState: CalculatorState = {
    operations: null,
    currentOperation: {
        math_operation: '',
        result: '',
        username: '',
    }
};
