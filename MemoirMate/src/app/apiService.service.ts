import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class apiService {
    constructor(private http : HttpClient){}
    sendingItemToDB(title:string):Observable<any>{
        return this.http.post("http://localhost:5555/api/memory/addItems",title)
    }
    gettingItemsFromDB( ):Observable<any>{
        return this.http.get("http://localhost:5555/api/memory/getItem")

    }
    getForEdit(id:number):Observable<any>{
        return this.http.get(`http://localhost:5555/api/memory/GetForEdit/${id}`)

    }
    edit(data:string, id:number ):Observable<any>{
        return this.http.put(`http://localhost:5555/api/memory/edit/${id}`, data)

    }
    deleteOPtion(id:number):Observable<any>{
        return this.http.delete(`http://localhost:5555/api/memory/delete/${id}`)

    }

}