
import { Injectable } from '@angular/core';

import {HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map}  from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url_api: string = "http://localhost:5000"



  
  private get_token(t):string {
    const token = localStorage.getItem(t);
    return token
  }

  getUsers():Observable<any>{
    const user = localStorage.getItem('currentUser');
    const token = this.get_token(user);
    return this.http.get(`${this.url_api}/user`,{headers:{mode:"cors","x-access-token":token}}).pipe(map(results=> results.users));
  } 


  delete_user(id): Observable<any>{
    const user = localStorage.getItem('currentUser');
    const token = this.get_token(user);
    return this.http.delete(`${this.url_api}/user/${id}`,{headers:{mode:"cors","x-access-token":token}});
  }


  constructor(private http: HttpClient) { }
}
