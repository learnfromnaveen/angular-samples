import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/IUser'
import { Observable, of } from 'rxjs';
@Injectable({providedIn:'root'})
export class RegisterService{ 
    register(user:IUser ): Observable<IUser>{
        user.id ="user6657556";
        return of(user);
    }
}