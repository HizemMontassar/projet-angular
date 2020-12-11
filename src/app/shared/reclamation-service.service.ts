import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Reclamation} from '../model/reclamation';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ReclamationServiceService {

  productsUrl: string = "http://localhost:3000/reclamations";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  addReclamation(reclamation: Reclamation): Observable<Reclamation>{
    return this.http.post<Reclamation>(this.productsUrl, reclamation, this.httpOptions);
  }

  getReclamations(){
    return this.http.get<Reclamation[]>(this.productsUrl);
  }
}
