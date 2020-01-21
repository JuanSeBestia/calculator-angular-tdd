import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CalculatorModel } from './calulator-model';
import { catchError } from 'rxjs/operators';
import { BASE_URL } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.presentErrorAlert(error.error.message);
    }
    else {
      this.presentErrorAlert(`Backend Error ${error.error}). Error code ${error.status}`);
    }

    return throwError('Error!');
  }


  private presentErrorAlert(message) {
    alert(message);
  }


  public getMathOperationsList(params?: string): Observable<CalculatorModel> {
    const sendParams = params ? { params: new HttpParams({ fromString: params }) } : {};
    return this.http.get<CalculatorModel>(`${BASE_URL}/mathOperation`, sendParams)
      .pipe(
        catchError(this.handleError)
      );
  }


  public createMathOperation(mathOperation: CalculatorModel) {
    return this.http.post(`${BASE_URL}/mathOperation`, mathOperation)
      .pipe(
        catchError(this.handleError)
      );
  }
}
