import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CheckmaturityService {
  baseurl = "http://localhost:8080/plans-api/plans"

  constructor(private _http:HttpClient) { }


  calculateMaturity = (year:number,amount:number):Observable<number> =>{
    let url = this.baseurl.concat("/year/amount/")+year+amount;
    return this._http.get<number>(url);
  }
  
}

