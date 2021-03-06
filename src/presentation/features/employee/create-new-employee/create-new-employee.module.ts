import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicComponentsModule} from '@basic-components/basic.components.module';
import {CreateNewEmployeeController} from '@features/employee/create-new-employee/create-new-employee.controller';
import {HeaderComponent} from '@features/employee/create-new-employee/header/header.component';
import {Home} from 'angular-feather/icons';
import {FeatherModule} from 'angular-feather';
import {RouterModule} from '@angular/router';
import {TextInputComponent} from '@features/employee/create-new-employee/text-input/text-input.component';
import {FooterComponent} from '@features/employee/create-new-employee/footer/footer.component';

const icons = {
    Home
}

@NgModule({
    declarations: [
        CreateNewEmployeeController,

        HeaderComponent,
        FooterComponent,
        TextInputComponent
    ],
    exports: [
        CreateNewEmployeeController
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
export class CreateNewEmployee {

}
