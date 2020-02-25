import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpErrorResponse,
    HttpEvent,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()

export class ErrorInterceptor implements HttpInterceptor {
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
        return throwError(error);
    }
}
