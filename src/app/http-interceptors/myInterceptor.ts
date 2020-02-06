import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpErrorResponse,
    HttpEvent,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()

export class MyInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newRequest = req.clone({
            headers: req.headers.set('Content-Type', 'application/json'),
        });

        return next.handle(newRequest).pipe(
            catchError((error: HttpErrorResponse) => this.handleError(error))
        );
    }


    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            this.presentErrorAlert(error.error.message);
        } else {
            this.presentErrorAlert(`Backend Error ${error.error}. Error code ${error.status}`);
        }

        return throwError(error.message || 'Server Error!');
    }


    private presentErrorAlert(message) {
        alert(message);
    }
}
