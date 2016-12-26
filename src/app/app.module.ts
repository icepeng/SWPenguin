import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module'

import { AppComponent } from './app.component';
import { RuneFilterComponent } from './rune-filter/rune-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    RuneFilterComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
