import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicComponentsModule} from '@basic-components/basic.components.module';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from '@features/employee/employee-home/components/header/header.component';
import {SearchBarComponent} from '@features/employee/employee-home/components/search-bar/search-bar.component';
import {EmployeeListComponent} from '@features/employee/employee-home/components/employee-list/employee-list.component';
import {EmployeeListItemComponent} from '@features/employee/employee-home/components/employee-list-item/employee-list-item.component';
import { EmployeeHomeControllerComponent } from '@features/employee/employee-home/employee-home.controller';
import {ChevronLeft, ChevronRight, Search} from 'angular-feather/icons';
import {FeatherModule} from 'angular-feather';
import {EmployeeMapper} from '@models/employee.mapper';

const icons = {
    Search, ChevronRight, ChevronLeft
}


@NgModule({
    declarations: [
        EmployeeHomeControllerComponent,
        HeaderComponent,
        SearchBarComponent,
        EmployeeListComponent,
        EmployeeListItemComponent
    ],
    exports: [
        EmployeeHomeControllerComponent // Export controller
    ],
    providers: [
        EmployeeMapper
    ],
    imports: [
        CommonModule,
        BasicComponentsModule,
        RouterModule,
        FeatherModule.pick(icons), // Add external icon library
    ]
})
export class EmployeeHome {
}
