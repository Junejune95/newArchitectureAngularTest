import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeHomeControllerComponent} from '@features/employee/employee-home/employee-home.controller';

const routes: Routes = [
    {
        path: '', component: EmployeeHomeControllerComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
