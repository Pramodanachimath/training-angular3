import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pensionplan } from './models/pensionplan';


@Injectable({
  providedIn: 'root'
})
export class PensionplanService {
  baseurl = "http://localhost:8080/plans-api/plans"

  constructor(private _http:HttpClient) { }

  addPensionPlan=(pensionplan:Pensionplan)=>{
    console.log('ADDED');
    return  this._http.post<Pensionplan[]>(this.baseurl,pensionplan);
}

updatePensionPlan=(data:any,plansId:string):Observable<any>=>{
  // if(pensionplan.planId)
  return  this._http.put(`${this.baseurl}//${plansId}`,data);
}

deletePensionPlan=(plansId:number)=>{
  return  this._http.delete(this.baseurl+"/"+plansId);
}

  getPensionPlans =():Observable<Pensionplan[]>=>{
      return this._http.get<Pensionplan[]>(this.baseurl);
  }

  getById = (newplanId:number):Observable<Pensionplan>=>{
    let url = this.baseurl.concat("/plansId/")+newplanId;
    return this._http.get<Pensionplan>(url);
  }

  getByCoverage = (coverage:string):Observable<Pensionplan[]>=>{
    let url = this.baseurl.concat("/coverage/")+coverage
    return this._http.get<Pensionplan[]>(url);
  }
  getByPremium = (premium:string):Observable<Pensionplan[]>=>{
    let url = this.baseurl.concat("/premium/")+premium
    return this._http.get<Pensionplan[]>(url);
  }
  
}

