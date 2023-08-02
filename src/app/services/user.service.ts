import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL:string="http://localhost:3001/users";

  constructor(private http: HttpClient) { }
  
  addUser(data:any):Observable<User>
  {
    return this.http.post(this.URL,data);
  }
}
