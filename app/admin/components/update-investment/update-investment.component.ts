import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pensionplan } from 'src/app/service/models/pensionplan';
import { PensionplanService } from 'src/app/service/pensionplan.service';

@Component({
  selector: 'app-update-investment',
  templateUrl: './update-investment.component.html',
  styleUrls: ['./update-investment.component.scss']
})
export class UpdateInvestmentComponent implements OnInit {

  constructor(private _pensionplanService:PensionplanService) { }
 

  ngOnInit(): void {
  }
  updateData=(value:any)=>{
    let body={
      planName:value.planName,
      age:value.age,
      premium:value.premium,
      term:value.term,
      coverage:value.coverage,
      amount:value.amount
    }
    this._pensionplanService.updatePensionPlan(body,'4').subscribe({
      next:(data)=>{
        console.log(data);
      }
    })
}

}
