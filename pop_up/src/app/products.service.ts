import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Response } from './enums/response';
import { Observable } from 'rxjs';
import { LogniRegisterService } from './logni-register.service';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    constructor(
        private http: HttpClient,
        private tokenService: LogniRegisterService
    ){}

    gettingProducts(): Observable<Response> {
        const token = this.tokenService.getTokenFromLocalStorage();
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.get<Response>("http://localhost:3000/api/products", { headers });
      }
    addProducts(data: any): Observable<any>{
        return this.http.post(`http://localhost:3000/api/products/post`, data);
    }
}