import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInvestmentComponent } from './admin/components/add-investment/add-investment.component';
import { AdminComponent } from './admin/components/admin/admin.component';
import { DeleteInvestmentComponent } from './admin/components/delete-investment/delete-investment.component';
import { UpdateInvestmentComponent } from './admin/components/update-investment/update-investment.component';
import { BudgentcalcComponent } from './components/budgentcalc/budgentcalc.component';
import { CheckMaturityDetailsComponent } from './components/check-maturity-details/check-maturity-details.component';
import { CheckMaturityComponent } from './components/check-maturity/check-maturity.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PensionplanDetailsComponent } from './components/pensionplan-details/pensionplan-details.component';
import { PensionplanComponent } from './components/pensionplan/pensionplan.component';

const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'contact',component:ContactusComponent},

{path:'checkMaturity',component:CheckMaturityComponent},
{path:'check-maturity-details/:year/:amount',component:CheckMaturityDetailsComponent},

{path:'plans',component:PensionplanComponent},
{path:'pensionplan-details/:plansId',component:PensionplanDetailsComponent},

{path:'plans/:type',component:PensionplanComponent},
{path:'plans/:propertyName/:choice',component:PensionplanComponent},

{path:'home',component:HomeComponent},

{path:'admin',component:AdminComponent},
{path:'admin/addInvestment',component:AddInvestmentComponent},

{path:'update',component:AdminComponent},
{path:'admin/updateInvestment',component:UpdateInvestmentComponent},

{path:'admin/deleteInvestment',component:DeleteInvestmentComponent},



{path:'customer',component:CustomerComponent},
{path:'customer-details/:id',component:CustomerDetailsComponent},

{path:'budgentcal',component:BudgentcalcComponent},
// {path:'/www.voya.com/tool/budget-calculator',component:BudgentcalcComponent},


{path:'',redirectTo:'/',pathMatch:'full'},
{path:'**',component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
