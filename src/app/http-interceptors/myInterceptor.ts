import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';

@Injectable()

export class MyInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');

        const newReq = req.clone({
            headers,
        });

        return next.handle(newReq);
    }
}
