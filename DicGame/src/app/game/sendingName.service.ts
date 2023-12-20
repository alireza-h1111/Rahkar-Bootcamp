import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class sendingNameAndGettingRnumbers {

  http = inject(HttpClient);

  getMyServerName(name:any, id: string): Observable<any> {
    return this.http.post(`http://localhost:8002/game/names/${id}`, name )
  }
  getMyNumber(): Observable<any> {
    return this.http.get("http://localhost:8002/game/dice")
  }
}