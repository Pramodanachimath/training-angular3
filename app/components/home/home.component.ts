import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { PensionplanComponent } from '../pensionplan/pensionplan.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  constructor(private _router:Router) { }
username: string='';
password:string='';

  ngOnInit(): void {
  }

// onRegister =(homeForm:NgForm)=>{
//  console.log(homeForm.value);
//   if(this.username=='Pramod' && this.password=='pam123'){
//     this._router.navigate(["/plans"]);
//   }

// }

 login():void{
  if(this.username=='Pramod' && this.password=='pam123'){
    this._router.navigate(["/plans"]);
    alert( `WELCOME ${this.username}`)
  }else{
    alert("Invalid credentials");
  }
 }

}
