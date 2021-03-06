import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeHomeControllerComponent} from '@features/employee/employee-home/employee-home.controller';
import {CreateNewEmployeeController} from '@features/employee/create-new-employee/create-new-employee.controller';
import { EditEmployeeController } from '@features/employee/edit-new-employee/edit-employee.controller';
import { EmployeeDetailController } from '@features/employee/detail-employee/employee-detail.controller';

const routes: Routes = [
    {
        path: '', component: EmployeeHomeControllerComponent
    },   {
        path: 'new', component: CreateNewEmployeeController,
    }, {
        path: 'edit/:id', component: EditEmployeeController,
    },
    {
        path: 'detail/:id', component: EmployeeDetailController,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
