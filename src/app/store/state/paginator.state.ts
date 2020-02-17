import { PaginationInformation } from 'src/app/calculator/models/calulator-model';

export interface PaginatorState {
    paginator: PaginationInformation;
}

export const initialPaginatorState: PaginatorState = {
    paginator: null,
};
