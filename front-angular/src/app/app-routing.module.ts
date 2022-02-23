import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeAddComponent } from './employee-add/employee-add.component';

import { EmployeeGetComponent } from './employee-get/employee-get.component';

const routes: Routes = [
  {path: 'employee', component: EmployeeAddComponent},
  {path: 'employee/:id', component: EmployeeAddComponent},
  {path: 'employees', component: EmployeeGetComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
