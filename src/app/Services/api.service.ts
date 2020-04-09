import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import{organization} from 'src/app/model/organization';
import {Observable,throwError} from 'rxjs';
import{map, catchError} from 'rxjs/operators'
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  
  

  
  
  private org_url="http://localhost:8080/core/organization";
  

  constructor(private _httpClient: HttpClient) { }
  
  
    //api call to list all organization ,return type :List of objects

    getAllOrg(){
         return this._httpClient.get<any>(this.org_url,{observe : 'response'}).pipe(map((res:any)=>res),catchError(this.handleError));
    }
//api call to list all active Organization
getActiveOrg(){
  return this._httpClient.get<any>(`${this.org_url}/active}`,{observe : 'response'}).pipe(map((res:any)=>res),catchError(this.handleError));
}

    //api call to get organization by id, input : Integer id,return type:org object

    getOrg(id:Number):Observable<any>{
      let id1= id.toString();
      return this._httpClient.get<any>(`${this.org_url}/${id1}`,{observe : 'response'}).pipe(map((res:any)=>res),catchError(this.handleError));
       
          }


    // api call to add organization, Input: org Object

   addOrg(_org:Object):Observable<organization>
   {
   
    return this._httpClient.post<organization>(this.org_url,_org,{observe : 'response'}).pipe(map((res:any)=>res),catchError(this.handleError));
   }



   //api call to edit organization ,Input : Updated object

  editOrg(_org:Object):Observable<organization>
   {
 //   this.Token = sessionStorage.getItem("token");
   // const headers ={'Authorization': 'Bearer '+this.Token,'Access-Control-Allow-Origin': '*'};
     return this._httpClient.put<organization>(this.org_url,_org,{observe : 'response'}).pipe(map((res:any)=>res),catchError(this.handleError));
   }


   //api call to delete organization ,Input :org Id

   deleteOrg(id:Number):Observable<any>{
    return this._httpClient.delete(`${this.org_url}/${id}`,{observe : 'response'}).pipe(map((res:any)=>res),catchError(this.handleError));
   }

 //api call to change status,Input :Organization Id

   statusOrg(id:Number){
     return this._httpClient.put(`${this.org_url}/status/${id}`,id,{observe : 'response'}).pipe(map((res:any)=>res),catchError(this.handleError));
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
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
  //   }
  //   // return an observable with a user-facing error message
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // };
   
 

   }
  
   
  

