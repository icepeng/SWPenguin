import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

const appRoutes: Routes = [
  //{ path: '/', component: RuneListComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
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
