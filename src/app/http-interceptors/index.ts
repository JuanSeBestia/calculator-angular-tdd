import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './errorInterceptor';


export const httpInterceptorsProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];
