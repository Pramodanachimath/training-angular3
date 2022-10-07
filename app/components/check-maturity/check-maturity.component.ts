
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckmaturityService } from 'src/app/service/checkmaturity.service';
import { Pensionplan } from 'src/app/service/models/pensionplan';


@Component({
  selector: 'app-check-maturity',
  templateUrl: './check-maturity.component.html',
  styleUrls: ['./check-maturity.component.scss']
})
export class CheckMaturityComponent implements OnInit {
 
  pensionplans:Pensionplan[]=[]

   nyear=parseInt("year");
   namount=parseInt("amount");
    
  // baseurl = "http://localhost:8080/plans-api/plans"
    
    constructor(private _checkmaturityService:CheckmaturityService,
      private _router:Router,
      private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  
  }
 
  calculateMaturity =(year:number,amount:number)=>{
   
    this._router.navigate(["/check-maturity-details",year,amount]);


  }


}
