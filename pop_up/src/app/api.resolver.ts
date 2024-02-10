import { Injectable } from '@angular/core';
import {
  Resolve, 
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { LogniRegisterService } from './logni-register.service';
import { Response } from './enums/response';

@Injectable({
  providedIn: 'root' 
})
export class APIResolver implements Resolve<Observable<Response>> {
  constructor(private loginData: LogniRegisterService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Response>{
    const data: Observable<Response>= this.loginData.getUsers() ;
    return data;
    
  }
}