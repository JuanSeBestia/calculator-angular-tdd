import { initialCalculatorState, CalculatorState } from '../state/calculator.state';
import { CalculatorActions, EUCalculatorActions } from '../actions/calculator.actions';

export const calculatorReducers = (
    state = initialCalculatorState,
    action: CalculatorActions
): CalculatorState => {
    switch (action.type) {
        case EUCalculatorActions.AddOperatorValue: {
            let newValue = '';
            if (!state.currentOperation.math_operation.includes('Syntax Error')) {
                newValue = state.currentOperation.math_operation + action.value;
            } else {
                newValue = action.value;
            }

            return {
                ...state,
                currentOperation: {
                    ...state.currentOperation,
                    math_operation: newValue
                }
            };
        }
        case EUCalculatorActions.ClearValue: {
            return {
                ...state,
                currentOperation: {
                    ...state.currentOperation,
                    math_operation: '',
                    result: '',
                }
            };
        }
        case EUCalculatorActions.SetResultValueSuccess: {
            return {
                ...state,
                currentOperation: {
                    ...state.currentOperation,
                    result: action.result
                }
            };
        }
        case EUCalculatorActions.SetResultValueError: {
            return {
                ...state,
                currentOperation: {
                    ...state.currentOperation,
                    math_operation: action.error,
                    result: action.error
                }
            };
        }
        case EUCalculatorActions.UpdateUsername: {
            return {
                ...state,
                currentOperation: {
                    ...state.currentOperation,
                    username: action.username,
                }
            };
        }
        default:
            return state;
    }
};


export function reducerCalculator(state: CalculatorState | undefined, action: CalculatorActions){
    return calculatorReducers(state, action);
}