export interface PaginationInformation {
    data: Array<CalculatorDataModel>;
    totalPages: number;
    currentPage: number;
    pageSize: number;
    count: number;
}

export interface CalculatorDataModel {
    username: string;
    result: string;
    math_operation: string;
}
