import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  allEventUrl: string = 'https://vanhackacton.herokuapp.com/api/v1/events/readall';
  token =  localStorage.getItem('token');
  httpOptions: any;
  constructor(
    private http: HttpClient
  ) { 
    /*this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.token ? this.token : ''
        }),
        observe: 'response'
      };*/
  }

  getEvents() {
    return this.http.get<any>(this.allEventUrl);
  }



}
