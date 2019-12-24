import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeHomeControllerComponent} from '@features/employee/employee-home/employee-home.controller';
import {CreateNewEmployeeController} from '@features/employee/create-new-employee/create-new-employee.controller';
const routes: Routes = [
    {
        path: '', component: EmployeeHomeControllerComponent
    },   {
        path: 'new', component: CreateNewEmployeeController,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
