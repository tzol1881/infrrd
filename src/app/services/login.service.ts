import { Injectable } from '@angular/core';
import { userList } from '../../assets/mock-data';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  users = userList;
  constructor() { }

  isAuthenticated(username: string, password: string): boolean{
    const isAuthenticated = this.users.find( user => user.username === username ? user : undefined);
    return isAuthenticated && isAuthenticated.password === password ? true : false;
  }
}
