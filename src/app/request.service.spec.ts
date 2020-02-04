import { TestBed } from '@angular/core/testing';

import { RequestService } from './request.service';
import { HttpClientModule, HttpErrorResponse, HttpClient } from '@angular/common/http';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Data } from '@angular/router';
import { CalculatorModel } from './calulator-model';

describe('RequestService', () => {
  let httpClient: HttpClient;
  let service: RequestService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]
    });
    httpClient = TestBed.get(HttpClient);
    service = TestBed.get(RequestService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get math operations', () => {
    const testData: CalculatorModel = {
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
      expect(data.data[0].username).toEqual('test');
    });

    const request = httpTestingController.expectOne('https://calculator-node-tdd.herokuapp.com/mathOperation');

    request.flush(testData);
  });
});
