import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IShopRequest } from './typings/shopingListRequestType.modules';
import { IShop } from './typings/shopingListTypes.modules';

@Injectable({
    providedIn: 'root'
})
export class shopingListApiService {
    constructor(private http : HttpClient){}
    sendingItemToDB(title:IShopRequest):Observable<any>{
        return this.http.post("http://localhost:3000/api/items/addItems",title)
    }
    gettingItemsFromDB( ):Observable<any>{
        return this.http.get("http://localhost:3000/api/items/getItem")

    }
    changeStatusInDB(id:number):Observable<any>{
        return this.http.get(`http://localhost:3000/api/items/status/${id}`)

    }
    deleteOPtion(id:number):Observable<any>{
        return this.http.delete(`http://localhost:3000/api/items/delete/${id}`)

    }
    getForEdit(id:number):Observable<any>{
        return this.http.get(`http://localhost:3000/api/items/GetForEdit/${id}`)

    }
    edit(data:IShopRequest, id:number ):Observable<any>{
        return this.http.put(`http://localhost:3000/api/items/edit/${id}`, data)

    }
}