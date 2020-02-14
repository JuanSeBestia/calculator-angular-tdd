import { TestBed } from '@angular/core/testing';

import { RequestService } from './request.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PaginationInformation, CalculatorDataModel } from './calculator/models/calulator-model';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

describe('RequestService', () => {
  let service: RequestService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(RequestService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get math operations', () => {
    const testData: PaginationInformation = {
      data: [{
        username: 'test',
        date: new Date(),
        result: '9',
        math_operation: '5+4',
      }],
      totalPages: 1,
      currentPage: 1,
      pageSize: 1,
      count: 1,
    };

    service.getMathOperationsList().subscribe(data => {
      expect(data).toEqual(testData);
    });

    const request = httpTestingController.expectOne('https://calculator-node-tdd.herokuapp.com/mathOperation');
    expect(request.request.method).toEqual('GET');

    request.flush(testData);

    httpTestingController.verify();
  });


  it('should handle error at creating mat-calculation', () => {
    const mockErrorResponse = {
      status: 400,
      statusText: 'Unknown Error'
    };

    const data = 'Bad Request';

    service.getMathOperationsList('').subscribe(
      res => { }, // Response doesn't mind for now
      (err: HttpErrorResponse) => {
        expect(err.status).toEqual(400, 'status');
        expect(err.error).toEqual(data, 'Bad Request');
      });
    const request = httpTestingController.expectOne('https://calculator-node-tdd.herokuapp.com/mathOperation');
    expect(request.request.method).toEqual('GET');
    request.flush(data, mockErrorResponse);
    httpTestingController.verify();
  });


  it('should handle error at getting mat-calculation', () => {
    const mockErrorResponse = {
      status: 400,
      statusText: 'Unknown Error'
    };

    const data = 'Bad Request';
    const mathOperation: CalculatorDataModel = {
      math_operation: '5+5',
      result: '10',
      date: new Date(),
      username: ''
    };

    service.createMathOperation(mathOperation).subscribe(
      res => { }, // Response doesn't mind for now
      (err: HttpErrorResponse) => {
        expect(err.status).toEqual(400, 'status');
        expect(err.error).toEqual(data, 'Bad Request');
      });
    const request = httpTestingController.expectOne('https://calculator-node-tdd.herokuapp.com/mathOperation');
    expect(request.request.method).toEqual('POST');
    request.flush(data, mockErrorResponse);
    httpTestingController.verify();
  });



  it('should create a new mat-calculation in server', () => {
    const mockResponse = {
      status: 200,
      statusText: 'OK'
    };

    const mathOperation: CalculatorDataModel = {
      math_operation: '5+5',
      result: '10',
      date: new Date(),
      username: 'TEST'
    };

    service.createMathOperation(mathOperation).subscribe(
      res => {
        expect(res).toEqual(mathOperation);
      },
    );

    const request = httpTestingController.expectOne('https://calculator-node-tdd.herokuapp.com/mathOperation');

    expect(request.request.method).toEqual('POST');
    request.flush(mathOperation, mockResponse);
    httpTestingController.verify();
  });
});
