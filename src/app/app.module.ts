import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {Github} from 'angular-feather/icons';
import {FeatherModule} from 'angular-feather';
import {EmployeeFeature} from '@features/employee/employee-feature.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

const icons = {
    Github
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        EmployeeFeature,
        FeatherModule.pick(icons),
        AngularFontAwesomeModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
