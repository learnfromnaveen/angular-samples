import { IUser } from '../interfaces/iuser'
export class User implements IUser{ 
    public id: string;  
    public firstName: string;  
    public lastName?: string; 
    public email: string;  
}