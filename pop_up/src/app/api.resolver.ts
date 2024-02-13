import { Injectable } from '@angular/core';
import {
  Resolve, 
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { LogniRegisterService } from './logni-register.service';
import { Response } from './enums/response';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root' 
})
export class APIResolver implements Resolve<Observable<Response>> {
  
  constructor(private loginData: ProductsService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Response>{
    const data: Observable<Response>= this.loginData.gettingProducts() ;
    return data;
  }
}