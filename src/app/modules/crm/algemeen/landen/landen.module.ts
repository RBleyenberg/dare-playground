import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandenEffects } from './store/landen.effects';
import * as fromLanden from './store/landen.reducer';
import { ButtonsModule, InputsModule, TableModule, IconsModule, ModalModule } from 'angular-bootstrap-md';
import { LandenComponent } from './containers/landen.component';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: LandenComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
   CommonModule,
   RouterModule.forChild(routes),
   SharedModule,
   FormsModule,
   ModalModule,
   ButtonsModule,
   InputsModule,
   IconsModule,
   TableModule,
   StoreModule.forFeature('landen', fromLanden.landenReducer),
   EffectsModule.forFeature([LandenEffects])
  ],
  declarations: [LandenComponent],
  exports: [LandenComponent],
})
export class LandenModule { }
