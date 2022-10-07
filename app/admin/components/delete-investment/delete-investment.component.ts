import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pensionplan } from 'src/app/service/models/pensionplan';
import { PensionplanService } from 'src/app/service/pensionplan.service';

@Component({
  selector: 'app-delete-investment',
  templateUrl: './delete-investment.component.html',
  styleUrls: ['./delete-investment.component.scss']
})
export class DeleteInvestmentComponent implements OnInit {
  plansId(plansId: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private _pensionplanService:PensionplanService) { }

  pensionplan: Pensionplan = {
    planName: '',
    plansId: 0,
    age: 0,
    term:'',
    premium: 0,
    amount:0,
    coverage:'',
  }

  ngOnInit(): void {
  }

   onSubmit=(deleteForm:NgForm)=>{
    console.log(deleteForm.value);
    console.log(this.pensionplan);
    this._pensionplanService.deletePensionPlan(this.pensionplan.plansId).subscribe({
      next:(data)=>{
        console.log(data);
      }
    })

  }
}
