import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from './enums/response';

@Injectable({
  providedIn: 'root'
})
export class LogniRegisterService {
  
  constructor( private http : HttpClient) { }

  // token related functions
  isLogin : boolean = false;

  private readonly _authTokentStorage: string = "authToken";

  setTokenToLocalStorage(token: string){
    localStorage.setItem(this._authTokentStorage,token)
    // this.isLogin = true;
  }

  getTokenFromLocalStorage():string{
     return localStorage.getItem(this._authTokentStorage) as string;
  }

  checkingAuthentication(){
    if(this.getTokenFromLocalStorage()){
      this.isLogin = true;
    }
  }
  
  // register
  registerUser(data: any) : Observable <any> {
    return this.http.post(`http://localhost:3000/api/user/register/`, data)
  }
  
  //login
  loginUser(data: any) : Observable <any> {
    return this.http.post(`http://localhost:3000/api/user/login/`, data)
  }

  //getting users data
  getUsers(): Observable<Response> {
    const token = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Response>("http://localhost:3000/api/user/users", { headers });
  }

}
