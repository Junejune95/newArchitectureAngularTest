import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicComponentsModule} from '@basic-components/basic.components.module';
import {PresentationModule} from '@presentation/presentation.module';
import {EmployeeHome} from '@features/employee/employee-home/employee-home.module';
import {CreateNewEmployee} from '@features/employee/create-new-employee/create-new-employee.module';

@NgModule({
    declarations: [
    ],
    imports: [
        PresentationModule, // Import presentation module for business logic facade injection
        CommonModule,
        BasicComponentsModule,
        EmployeeHome,
        CreateNewEmployee
    ],
    exports: [
        EmployeeHome,
        CreateNewEmployee
    ]
})
export class EmployeeFeature {
}
