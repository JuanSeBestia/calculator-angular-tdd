import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './myInterceptor';


export const httpInterceptorsProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
];
