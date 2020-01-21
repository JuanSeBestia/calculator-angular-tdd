import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { myInterceptor } from './myInterceptor';


export const httpInterceptorsProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: myInterceptor, multi: true },
]