import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PensionplanService } from 'src/app/service/pensionplan.service';

@Component({
  selector: 'app-budgentcalc',
  templateUrl: './budgentcalc.component.html',
  styleUrls: ['./budgentcalc.component.scss']
})
export class BudgentcalcComponent implements OnInit {

  constructor(private _pensionplanService:PensionplanService,
    private _router:Router,
    private _activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
  }

  show =()=>{
    this._router.navigate(["/www.voya.com/tool/budget-calculator"]);
  }
}
