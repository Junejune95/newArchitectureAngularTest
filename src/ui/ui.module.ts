import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@ui/app/app-routing.module';
import { AppComponent } from '@ui/app/app.component';
import { ServiceModule } from '@service/service.module';
import { DataModule } from '@data/data.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ServiceModule,
        DataModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class UiModule { }
