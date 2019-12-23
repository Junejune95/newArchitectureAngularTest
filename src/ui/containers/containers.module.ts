import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiModule} from '@ui/ui.module';

import {PipesModule} from '@pipes/pipes.module';
import {CompoundComponentsModule} from '@compound-components/compound-components.module';
import {BasicComponentsModule} from '@basic-components/basic-components.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiModule,
      PipesModule,
      CompoundComponentsModule,
      BasicComponentsModule
  ]
})
export class ContainersModule { }
