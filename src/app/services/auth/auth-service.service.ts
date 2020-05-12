import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {Login, User } from '../../models'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUserToken: Observable<User>;
  private getUserUrl: string = 'https://vanhackacton.herokuapp.com/api/v1/users/details'


  constructor(public http: HttpClient) {
  }
  public  currentUsersDetails(): Observable<User> {
  const token =  localStorage.getItem('token');
  const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': token ? token : ''
    })
  };
    return this.http.get<User>(this.getUserUrl, httpOptions )
  }

  loginUrl = `https://vanhackacton.herokuapp.com/api/v1/users/signin`;

  login (Login: Login) {
    return this.http.post<any>(this.loginUrl, Login)
    .pipe(map( user => {
      if(user.token) {
        localStorage.setItem('token', user.token);
      }
      return user;
    }) );
  }

  logout() {
    localStorage.removeItem('token');
  }
}
