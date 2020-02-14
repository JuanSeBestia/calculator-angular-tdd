import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
<<<<<<< refs/remotes/origin/develop
import { PaginationInformation, CalculatorDataModel } from './calculator/models/calulator-model';
=======
import { CalculatorModel, CalculatorDataModel } from './calculator/models/calulator-model';
>>>>>>> refactor: :truck: moving files (calculator files) to better organization
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  public getMathOperationsList(params?): Observable<PaginationInformation> {
    return this.http.get<PaginationInformation>(`${BASE_URL}/mathOperation`, { params });
  }


  public createMathOperation(mathOperation: CalculatorDataModel) {
    return this.http.post(`${BASE_URL}/mathOperation`, mathOperation);
  }


}
