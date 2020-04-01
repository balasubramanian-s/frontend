import { Injectable } from '@angular/core';

import {HttpInterceptor,HttpRequest,HttpResponse,HttpHandler,HttpEvent,HttpErrorResponse} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class HttpConfigInterceptor  implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = sessionStorage.getItem("token");

        if (idToken) {
            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + idToken) });
        }

            if (!req.headers.has('Content-Type')) {
                req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
            }
    
            req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    

            return next.handle(req).pipe(
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        console.log('event--->>>', event);
                    }
                    return event;
                }),catchError((error: HttpErrorResponse) => {
                    let data = {};
                    data = {
                        reason: error && error.error.reason ? error.error.reason : '',
                        status: error.status
                    };
                    console.log(data);
                    return throwError(error);
                }));
        
       
    }
}