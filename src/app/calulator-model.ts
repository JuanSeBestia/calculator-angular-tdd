export interface CalculatorModel {
    data: Array<CalculatorDataModel>;
    totalPages: number;
    currentPage: number;
    pageSize: number;
    count: number;
}

export interface CalculatorDataModel {
    username: string;
    date: Date;
    result: string;
    operation: string;
}
