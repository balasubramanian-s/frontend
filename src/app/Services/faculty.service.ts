import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Faculty } from 'src/app/model/Faculty';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { Roles } from 'src/app/model/Roles';
import { FacultyObj } from 'src/app/model/FacultyObj';
import { JsonPipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})






export class FacultyService {


  private base_url = "http://localhost:8080/faculty/";
  private roles_url="http://localhost:8080/role/"

  constructor(private _httpClient: HttpClient) { }
  faculty: Faculty[];

  roles: Roles[];

  Token:String;

  getAllFactulty() {
    // this.Token = sessionStorage.getItem("token");
     // const headers ={'Authorization':'Bearer '+this.Token,'Access-Control-Allow-Origin': '*'};
    return this._httpClient.get(this.base_url).pipe(map((res: any) => res.data),catchError(this.handleError));
  }

  getFaculty(id: Number) {
    return this._httpClient.get(`${this.base_url}${id}`).pipe(map((res: any) => res.data),catchError(this.handleError));

  }
  getFacultyByInstitution(id: Number): Observable<FacultyObj[]> {
    
    return this._httpClient.get<FacultyObj[]>(`${this.base_url}institution/${id}`).pipe(map((res:any)=>res.data),catchError(this.handleError));
  }




  deleteFaculty(id: Number): Observable<any> {
    
    return this._httpClient.delete(`${this.base_url}${id}`).pipe(map((res:any)=>res.description),catchError(this.handleError));

  }
  addFaculty(fac: Faculty): Observable<Faculty> {
    
    return this._httpClient.post<Faculty>(this.base_url, fac).pipe(map((res:any)=>res.description),catchError(this.handleError));
  }
  editFaculty(fac: Faculty): Observable<Faculty> {
  
    return this._httpClient.put<Faculty>(this.base_url, fac).pipe(map((res:any)=>res.description),catchError(this.handleError));
  }



  //htpp calls for Roles Api
  getRoles(): Observable<Roles> {
      return this._httpClient.get<Roles[]>(this.roles_url).pipe(map((res: any) => this.roles = res),catchError(this.handleError));

  }
  getRolesByid(id: number) {
    
    return this._httpClient.get<Roles>(`${this.roles_url}${id}`).pipe(map((res: any) => res),catchError(this.handleError));
  }
  addRole(role: Roles) {
    return this._httpClient.post<Roles>(this.roles_url, role).pipe(map((res: any) => res),catchError(this.handleError));
  }
  deleteRole(id: Number) {
    return this._httpClient.delete(`${this.roles_url}${id}`).pipe(map((res:any) => res.description),catchError(this.handleError));
  }




  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json, charset=utf-8' })
};