import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiModule} from '@ui/ui.module';
import {PipesModule} from '@pipes/pipes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiModule,
      PipesModule
  ]
})
export class BasicComponentsModule { }
