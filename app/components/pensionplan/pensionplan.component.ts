import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pensionplan } from 'src/app/service/models/pensionplan';

import { PensionplanService } from 'src/app/service/pensionplan.service';

@Component({
  selector: 'app-pensionplan',
  templateUrl: './pensionplan.component.html',
  styleUrls: ['./pensionplan.component.scss']
})
export class PensionplanComponent implements OnInit {
pensionplans:Pensionplan[]=[]

  
  
  constructor(private _pensionplanService:PensionplanService,
    private _router:Router,
    private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(map=>{
      let propertyName = map.get("property");
      let propertyValue = map.get("value");
      let pval = ''
      if(propertyValue)
        pval = propertyValue;
    
      if(propertyName=='premium'){
        this._pensionplanService.getByPremium(pval).subscribe({
          next:(data)=>{
            console.log(`${data}`);
            this.pensionplans = data;
          }
        });
      }
      
      if(propertyName=='coverage'){
        this._pensionplanService.getByCoverage(pval).subscribe({
          next:(data)=>{
            console.log(`${data}`);
            this.pensionplans = data;
          }
        });
      }
    });
    
    this._pensionplanService.getPensionPlans().subscribe({
      next:(data)=>{
        console.log(`${data}`);
        this.pensionplans = data;
      },
      complete:()=>console.log(`completed`)
    })

  
  }
  show =(pensionplanId:number)=>{
    console.log(`id is ${pensionplanId}`);
    this._router.navigate(["/pensionplan-details",pensionplanId]);

  }
}
