import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{ 

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        console.log("Auth Interceptor");
        
        if(this.hasNewApiUrl(request)){ 
           
            request = request.clone({
                url: request.url + "&apiKey="+ environment.newsApiConfiguration.apiKey  
            });
        }
        
        console.log(this.hasNewApiUrl(request));

        return next.handle(request);
    }

    hasNewApiUrl(request: HttpRequest<any>){ 
        return request.url.indexOf(environment.newsApiConfiguration.url) >=0;
    }
}