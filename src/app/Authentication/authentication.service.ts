import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import { map, catchError } from 'rxjs/operators';
import { Observable ,throwError} from 'rxjs';
import * as moment from "moment";
import {User} from '../model/User'
import { error } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
token;
role=[];
url="http://localhost:8080/authenticate"
  
  constructor(private _httpClient:HttpClient) { }

getjwt(user:User):Observable<Jwt>{
return  this._httpClient.post<Jwt>(this.url,user).pipe(map((res:any)=>res.data.jwt),catchError(this.handleError));
}
 
authenticate(user:User) {

this.getjwt(user).subscribe((data:any)=>{this.token=data});
    if (this.token!=null) {
      sessionStorage.setItem('username',JSON.stringify(user.username) );
      sessionStorage.setItem('token',this.token);

      return true;
    } else {
      return false;
    }
  }
  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('token')      
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
  }
  private handleError(error: HttpErrorResponse) {
    let errMsg: string;
    let data={};
    
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    data={
      reason:error.error.errors,
      status:error.status
    }    
    return throwError(data);
  }


}

export class Jwt{
  private jwt:any;
}
