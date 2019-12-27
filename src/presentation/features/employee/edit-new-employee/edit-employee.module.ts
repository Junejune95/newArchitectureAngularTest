import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicComponentsModule} from '@basic-components/basic.components.module';
import {Home} from 'angular-feather/icons';
import {FeatherModule} from 'angular-feather';
import {RouterModule} from '@angular/router';
import {EditEmployeeController} from '@features/employee/edit-new-employee/edit-employee.controller';
import {HeaderComponent} from '@features/employee/edit-new-employee/header/header.component';
import {FooterComponent} from '@features/employee/edit-new-employee/footer/footer.component';
import {TextInputComponent} from '@features/employee/edit-new-employee/text-input/text-input.component';

const icons = {
    Home
}

@NgModule({
    declarations: [
        EditEmployeeController,
        HeaderComponent,
        FooterComponent,
        TextInputComponent
    ],
    exports: [
        EditEmployeeController
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
export class EditEmployee {

}
