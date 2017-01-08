import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@angular/material';

import { RuneFilterComponent } from './rune-filter/rune-filter.component';
import { RuneListComponent } from './rune-list/rune-list.component';
import { RuneComponent } from './rune.component';

import { RuneListService } from './rune-list.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [
    RuneFilterComponent,
    RuneListComponent,
    RuneComponent,
  ],
  exports: [
    RuneFilterComponent,
    RuneListComponent
  ],
  providers: [
    RuneListService
  ]
})
export class RuneModule { }
