import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CheckmaturityService } from 'src/app/service/checkmaturity.service';


@Component({
  selector: 'app-check-maturity-details',
  templateUrl: './check-maturity-details.component.html',
  styleUrls: ['./check-maturity-details.component.scss']
})
export class CheckMaturityDetailsComponent implements OnInit {

 
  year:number=0;
  amount:number=0;

 maturity!:number;
  constructor(private _checkmaturityService:CheckmaturityService,
              private _activatedRoute:ActivatedRoute   ) { }

              ngOnInit(): void {
                this._activatedRoute.paramMap.subscribe((map)=>{
          
                });
                
                this._checkmaturityService.calculateMaturity(this.year,this.amount).subscribe({
                  next:(data)=>{
                    this.maturity=data;

                  }
                })
              }
            
            }
