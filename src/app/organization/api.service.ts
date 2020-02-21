import { Injectable } from '@angular/core';
import{HttpClient } from '@angular/common/http';
import{organization} from './organization';
import {Observable} from 'rxjs';
import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  _org: any;
   body:any;

  private base_url="http://localhost:8080/api/organization";

  constructor(private _httpClient: HttpClient) { }

  

    getAllOrg():Observable<organization[]>{
      return this._httpClient.get<organization[]>(this.base_url).pipe(map((res:any)=>res));
    }


    getOrg(id:Number):Observable<organization>{

     this._org=this._httpClient.get<organization>(`${this.base_url}/${id}`).pipe();
      return this._org;

    }



   addOrg(_org:Object):Observable<organization>
   {
    return this._httpClient.post<organization>(this.base_url,_org).pipe();
   }
  editOrg(_org:Object):Observable<organization>
   {
     return this._httpClient.put<organization>(this.base_url,_org).pipe();
   }
   deleteOrg(id:Number):Observable<any>{
    return this._httpClient.delete(`${this.base_url}/${id}`,{responseType:"text"});
   }

   update(id:Number){
    this.getOrg(id).subscribe(data=>{this.body=data;
       console.log(this.body);
           
    });
  
    
   }

   }


