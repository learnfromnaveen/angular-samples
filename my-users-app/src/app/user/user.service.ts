import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<IUser[]>{
    
    const url: string  =  'https://jsonplaceholder.typicode.com/users';
    
    return this.httpClient.get<IUser[]>(url);
  }
}
