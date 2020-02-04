import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { CalculatorModel } from './calulator-model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.presentErrorAlert(error.error.message);
    } else {
      this.presentErrorAlert(`Backend Error ${error.error}). Error code ${error.status}`);
    }

    return throwError('Error!');
  }


  private presentErrorAlert(message) {
    alert(message);
  }


  public getMathOperationsList(params?): Observable<CalculatorModel> {
    return this.http.get<CalculatorModel>(`${BASE_URL}/mathOperation`, { params })
      .pipe(
        catchError(this.handleError)
      );
  }


  public createMathOperation(mathOperation: CalculatorDataModel) {
    return this.http.post(`${BASE_URL}/mathOperation`, mathOperation)
      .pipe(
        catchError(this.handleError)
      );
  }
}
