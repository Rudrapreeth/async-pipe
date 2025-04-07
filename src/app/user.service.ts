import { Injectable } from '@angular/core';
import { delay, firstValueFrom, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export interface User{
  name: string;
  salary: number;
  joinedDate?: Date;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL='http://localhost:3000/users'; 

  constructor(private http:HttpClient){}
  getUsers(): Observable<User[]>{
    const users:User[]=[
      {name:'Liam',salary: 20000, joinedDate: new Date('01-03-2025')},
      {name:'Yuki',salary: 10000, joinedDate: new Date('02-03-2025')},
      {name:'Lewis',salary: 30000, joinedDate: new Date('03-03-2025')},
      {name:'Alex',salary:40000, joinedDate: new Date('04-03-2025')},
      {name:'Leclerc',salary:50000, joinedDate: new Date('05-03-2025')},
      {name: 'Ash',salary: 25000, joinedDate: new Date('03-04-2025')},
      {name:'Ray',salary:30000,joinedDate: new Date('4-3-2025')},
      {name:'Zhou',salary:40000,joinedDate:new Date('03-03-2025')},
      {name:'harish',salary:40000,joinedDate:new Date('03-03-2025')},
      {name:'Sai',salary:45000,joinedDate:new Date('03-03-2025')}
    ];
    return of(users).pipe(delay(4000)); //'of' converts the array into observable
  }
  async getUserCount(): Promise<number> {
    const users = await firstValueFrom(this.getUsers()); //Convert Observable to Promise
    return users.length; //Dynamically return count
  }
}

