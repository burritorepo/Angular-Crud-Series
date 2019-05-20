import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LAYOUT_COMPONENTS } from './components';
import { LayoutRoutingModule } from './layout.routing.module';
@NgModule({
  declarations: [...LAYOUT_COMPONENTS],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [],
  providers: [],
})
export class LayoutModule {}