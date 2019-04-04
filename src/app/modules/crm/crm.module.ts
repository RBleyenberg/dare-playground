import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from '../../shared/shared.module';
import { LandenComponent } from './algemeen/landen/landen.component';

export const routes = [
  { path: '', redirectTo: 'landen', pathMatch: 'full'},
  { path: 'landen', component: LandenComponent, data: { breadcrumb: 'Landen' } }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule,
    SharedModule
  ],
  declarations: [
    LandenComponent
  ]
})
export class CrmModule { }