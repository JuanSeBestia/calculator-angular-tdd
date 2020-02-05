import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { CalculatorModel, CalculatorDataModel } from './calulator-model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  public getMathOperationsList(params?): Observable<CalculatorModel> {
    return this.http.get<CalculatorModel>(`${BASE_URL}/mathOperation`, { params })
  }


  public createMathOperation(mathOperation: CalculatorDataModel) {
    return this.http.post(`${BASE_URL}/mathOperation`, mathOperation)
  }


}
