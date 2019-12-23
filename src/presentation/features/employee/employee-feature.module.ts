import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PresentationModule} from '@presentation/presentation.module';
import {EmployeeHome} from '@features/employee/employee-home/employee-home.module';


@NgModule({
    declarations: [
    ],
    imports: [
        PresentationModule, // Import presentation module for business logic facade injection
        CommonModule
    ],
    exports: [
        EmployeeHome  //Export employee home package
    ]
})
export class EmployeeFeature {
}
