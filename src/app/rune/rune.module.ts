import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@angular/material';

import { RuneFilterComponent } from './rune-filter/rune-filter.component';
import { RuneListComponent } from './rune-list/rune-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [
    RuneFilterComponent,
    RuneListComponent,
  ],
  exports: [
    RuneFilterComponent,
    RuneListComponent
  ]
})
export class RuneModule { }
