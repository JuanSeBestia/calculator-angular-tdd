import { PaginatorState, initialPaginatorState } from '../state/paginator.state';
import { PaginatorActions, EUPaginatorActions } from '../actions/paginator.actions';

export const paginatorReducers = (
    state = initialPaginatorState,
    action: PaginatorActions
): PaginatorState => {
    switch (action.type) {
        case EUPaginatorActions.GetPaginatorSuccess: {
            return {
                ...state,
                paginator: action.payload
            };
        }
        default:
            return state;
    }
};

export function reducerPaginator(state: PaginatorState, action: PaginatorActions) {
    return paginatorReducers(state, action);
}
