import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import{organization} from 'src/app/model/organization';
import {Observable,throwError} from 'rxjs';
import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  _org: any;
   body:any;

  private org_url="http://localhost:8080/core/organization";


  constructor(private _httpClient: HttpClient) { }
  
  
    //api call to list all organization ,return type :List of objects

    getAllOrg():Observable<organization[]>{
      return this._httpClient.get<organization[]>(this.org_url).pipe(map((res:any)=>res.data));
    }


    //api call to get organization by id, input : Integer id,return type:org object

    getOrg(id:Number):Observable<organization>{
     this._org=this._httpClient.get<organization>(`${this.org_url}/${id}`).pipe();
      return this._org;
          }


    // api call to add organization, Input: org Object

   addOrg(_org:Object):Observable<organization>
   {
    return this._httpClient.post<organization>(this.org_url,_org).pipe();
   }



   //api call to edit organization ,Input : Updated object

  editOrg(_org:Object):Observable<organization>
   {
     return this._httpClient.put<organization>(this.org_url,_org).pipe();
   }


   //api call to delete organization ,Input :org Id

   deleteOrg(id:Number):Observable<any>{
    return this._httpClient.delete(`${this.org_url}/${id}`,{responseType:"text"});
   }

 //api call to change status,Input :Organization Id

   statusOrg(id:Number){
     return this._httpClient.put(`${this.org_url}/status/${id}`,{responseType:"text"});
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

