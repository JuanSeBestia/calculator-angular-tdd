import { ErrorInterceptor } from './errorInterceptor';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RequestService } from '../request.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


describe('HttpInterceptor', () => {
  let service: RequestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        RequestService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true,
        }
      ]
    });

    service = TestBed.get(RequestService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create an instance', () => {
    expect(new ErrorInterceptor()).toBeTruthy();
  });

  it('should add a Content-Type header', () => {
    service.getMathOperationsList().subscribe(); // Just call the method

    const httpRequest = httpMock.expectOne('https://calculator-node-tdd.herokuapp.com/mathOperation');

    expect(httpRequest.request.headers.has('Content-Type')).toEqual(true);
  });

  it('should handle error', () => {
    const interceptor = new ErrorInterceptor() as any;
    // "as any" to avoid the "private method" type errors
    spyOn(interceptor as any, 'handleError');
    const mockErrorResponse = {
      status: 400,
      statusText: 'Unknown Error'
    };

    service.getMathOperationsList().subscribe(
      () => {
        // Nothing
      },
      (error) => {
        expect(interceptor.handleError).toHaveBeenCalled();
      }
    );
    const request = httpMock.expectOne('https://calculator-node-tdd.herokuapp.com/mathOperation');
    request.flush(mockErrorResponse);
  });
});
