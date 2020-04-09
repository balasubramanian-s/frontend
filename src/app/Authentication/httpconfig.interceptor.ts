import { Injectable } from '@angular/core';
import {AuthenticationService} from '../Authentication/authentication.service'
import {HttpInterceptor,HttpRequest,HttpResponse,HttpHandler,HttpEvent,HttpErrorResponse} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class HttpConfigInterceptor  implements HttpInterceptor {
    constructor(private authService:AuthenticationService){}
    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken =JSON.parse(sessionStorage.getItem("token")) ;
       let authHeader:String="Bearer ";

        if (idToken) {
            
            req = req.clone({setHeaders: { 'Authorization':authHeader+idToken }  });
            req = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', '*') });
           
            
        }

            if (!req.headers.has('Content-Type')) {
                req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
            }
    
            req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    

            return next.handle(req).pipe(
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                      //  console.log('event--->>>', event.body.description);
                    }
                   
                    return event;
                }),catchError((error: HttpErrorResponse) => {
                    let data = {};
                    data = {
                        reason: error.error.errors,
                        status: error.status
                    };
                    
                    return throwError(error);
                }));
        
       
    }
}