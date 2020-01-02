import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {TextComponent} from '@basic-components/text/text.component';
import {ButtonComponent} from '@basic-components/button/button.component';
import {InputComponent} from '@basic-components/input/input.component';
import {ImageComponent} from '@basic-components/image/image.component';
import {TableComponent} from '@basic-components/table/table.component';
import {BtnlinkComponent} from '@basic-components/btnLink/btnlink.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {SearchPipe} from '@presentation/pipes/search.pipe';

const components = [
    TextComponent,
    ButtonComponent,
    InputComponent,
    ImageComponent,
    TableComponent,
    BtnlinkComponent,
    SearchPipe
];

@NgModule({
    declarations: components,
    exports: components,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AngularFontAwesomeModule
    ]
})
export class BasicComponentsModule {
}
