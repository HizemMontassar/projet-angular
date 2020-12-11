import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/User';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  userUrl: string = "http://localhost:3000/users";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getUsername(){
    return this.http.get<User[]>(this.userUrl);
  }
}
