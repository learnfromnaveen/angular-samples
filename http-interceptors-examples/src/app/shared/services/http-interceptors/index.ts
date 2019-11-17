import { HTTP_INTERCEPTORS } from  '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor.service';
import { ErrorInterceptor } from './error-interceptor.service';

export const httpIntercepterProviders =  [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];