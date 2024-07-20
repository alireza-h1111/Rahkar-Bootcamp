import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { itemType } from './enums/itemType';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http : HttpClient) { }

  gettingDataFromServer() : Observable<itemType[]>{
    return this.http.get<itemType[]>(`http://localhost:4500/backend/data/get`)
  }
  savingData(data:itemType) : Observable<itemType>{
    return this.http.post<itemType>(`http://localhost:4500/backend/data/get`, data)
  }
}
