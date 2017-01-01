import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { RuneFilterComponent } from './rune-filter/rune-filter.component';
import { RuneListComponent } from './rune-list/rune-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RuneFilterComponent,
    RuneListComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
