import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as moment from "moment";
import { error } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
token;
url="http://localhost:8080/authenticate"
  
  constructor(private _httpClient:HttpClient) { }

getjwt(username,password):Observable<Jwt>{
return  this._httpClient.post<Jwt>(this.url,{username,password}).pipe(map((res:any)=>res.jwt));
}
 
authenticate(username, password) {

this.getjwt(username,password).subscribe((data:any)=>this.token=data.jwt);
    if (this.token!=null) {
      sessionStorage.setItem('username', username);
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


/*

  login(username,password){
    return this._httpClient.post(this.url,{username,password}).pipe(map(res => this.setSession));
  }
  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
}   
public isLoggedIn() {
  return moment().isBefore(this.getExpiration());
}

isLoggedOut() {
  return !this.isLoggedIn();
}

getExpiration() {
  const expiration = localStorage.getItem("expires_at");
  const expiresAt = JSON.parse(expiration);
  return moment(expiresAt);
}    
 */
}
export class User{
  private username:String;
  private password:String;
}
export class Jwt{
  private jwt:any;
}
