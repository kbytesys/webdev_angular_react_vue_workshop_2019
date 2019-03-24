import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',  redirectTo: '/reception/dashboard',  pathMatch: 'full' },
  { path: 'reception', loadChildren: './reception/reception.module#ReceptionModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
