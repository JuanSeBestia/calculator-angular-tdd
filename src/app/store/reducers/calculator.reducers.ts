import { initialCalculatorState, CalculatorState } from '../state/calculator.state';
import { CalculatorActions, EUCalculatorActions } from '../actions/calculator.actions';
import { selectCurrentOperation } from '../selectors/calculator.selectors';


export const calculatorReducers = (
    state = initialCalculatorState,
    action: CalculatorActions
): CalculatorState => {
    switch (action.type) {
        case EUCalculatorActions.CreateOperationSuccess: {
            console.log("enter to reducer", action);

            return {
                ...state,
                currentOperation: action.payload
            };
        }
        case EUCalculatorActions.AddOperatorValue: {
            let newValue = state.currentOperation.math_operation + action.value;
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
                }
            }
        }
        case EUCalculatorActions.SetResultValueSuccess: {
            return {
                ...state,
                currentOperation: {
                    ...state.currentOperation,
                    result: action.result
                }
            }
        }
        case EUCalculatorActions.SetResultValueError: {
            return {
                ...state,
                currentOperation: {
                    ...state.currentOperation,
                    math_operation: action.error,
                    result: action.error
                }
            }
        }
        case EUCalculatorActions.UpdateUsername: {
            return {
                ...state,
                currentOperation: {
                    ...state.currentOperation,
                    username: action.username,
                }
            }
        }
        default:
            return state;
    }
}