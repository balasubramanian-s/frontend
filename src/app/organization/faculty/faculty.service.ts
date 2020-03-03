import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faculty } from './Faculty';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Roles } from 'src/app/faculty/Roles';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private base_url = "http://localhost:8081/emp";
 
  constructor(private _httpClient: HttpClient) { }
  faculty: Faculty[];
  roles: Roles[];

  getAllFactulty(): Observable<Faculty[]> {
    return this._httpClient.get<Faculty[]>(`${this.base_url}/faculty`).pipe(map((res: any) => res));
  }

  getFaculty(id: Number) {
    return this._httpClient.get<Faculty>(`${this.base_url}/faculty/${id}`).pipe(map((res: any) => res));

  }
  getFacultyByInstitution(id: Number): Observable<Faculty[]> {
    return this._httpClient.get<Faculty[]>(`${this.base_url}/faculty/institution/${id}`).pipe(map((res: any) => res));

  }
  deleteFaculty(id: Number): Observable<any> {
    return this._httpClient.delete(`${this.base_url}/faculty/${id}`, { responseType: "text" });

  }
  addFaculty(fac: Faculty): Observable<Faculty> {
    return this._httpClient.post<Faculty>(`${this.base_url}/faculty`, fac).pipe();
  }
  editFaculty(fac: Faculty): Observable<Faculty> {
    return this._httpClient.put<Faculty>(`${this.base_url}/faculty`, fac).pipe();
  }



  //htpp calls for Roles Api
  getRoles(): Observable<Roles> {
    return this._httpClient.get<Roles[]>(`${this.base_url}/role`).pipe(map((res: any) => res));

  }
  


}
