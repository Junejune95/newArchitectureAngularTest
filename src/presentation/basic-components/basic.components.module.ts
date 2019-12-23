import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {TextComponent} from '@basic-components/text/text.component';
import {ButtonComponent} from '@basic-components/button/button.component';
import {InputComponent} from '@basic-components/input/input.component';
import {ImageComponent} from '@basic-components/image/image.component';

const components = [
    TextComponent,
    ButtonComponent,
    InputComponent,
    ImageComponent
];

@NgModule({
    declarations: components,
    exports: components,
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ]
})
export class BasicComponentsModule {
}
