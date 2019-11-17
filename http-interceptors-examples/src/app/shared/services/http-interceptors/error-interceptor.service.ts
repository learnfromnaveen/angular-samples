import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{ 

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        console.log("Error Interceptor");

        return next.handle(request).pipe(
            tap( event =>{
                console.log(event);
                if(event instanceof HttpErrorResponse){
                    console.log('Error');    
                }
            })
        );
    }
}