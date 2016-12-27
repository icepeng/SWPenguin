import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FabComponent } from './fab/fab.component';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  declarations: [
    NavComponent,
    FabComponent,
    FileUploadDialogComponent
  ],
  entryComponents: [
    FileUploadDialogComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    NavComponent,
    FabComponent,
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }
}
