import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { RuneListComponent } from './rune/rune-list/rune-list.component';

const appRoutes: Routes = [
  { path: '',  component: RuneListComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
