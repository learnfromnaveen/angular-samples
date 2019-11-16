import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators'

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {


    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        console.log('interceptor being used in the pipeline....');

        const started = Date.now();

        let ok: string;

        return next.handle(req).pipe(
            tap(
                (event: HttpEvent<any>) => ok = event instanceof HttpResponse ? 'succeeded' : '',
                (error: HttpErrorResponse) => ok = "failed"
            ),
            // Log when response observable either completes or errors
            finalize(() => {
                const elapsed = Date.now() - started;
                const msg = `${req.method} "${req.urlWithParams}" ${ok} in ${elapsed} ms.`;
                console.log(msg);
            })
        );
    }
}