import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicComponentsModule} from '@basic-components/basic.components.module';
import {EmployeeDetailController} from '@features/employee/detail-employee/employee-detail.controller';
import {HeaderComponent} from '@features/employee/detail-employee/header/header.component';
import {Home} from 'angular-feather/icons';
import {FeatherModule} from 'angular-feather';
import {RouterModule} from '@angular/router';
import {TextComponent} from '@features/employee/detail-employee/text/text.component';
import {FooterComponent} from '@features/employee/detail-employee/footer/footer.component';

const icons = {
    Home
}

@NgModule({
    declarations: [
        EmployeeDetailController,
        HeaderComponent,
        FooterComponent,
        TextComponent
    ],
    exports: [
        EmployeeDetailController
    ],
    providers: [

    ],
    imports: [
        CommonModule,
        FeatherModule.pick(icons),
        BasicComponentsModule,
        RouterModule,
    ]
})
export class EmployeeDetail {

}
