import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LandenEffects } from './store/landen.effects';
import * as fromLanden from './store/landen.reducer';
import { LandenComponent } from './containers/landen.component';

const routes: Routes = [
    { path: 'crm/landen', component: LandenComponent }
  ];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('landen', fromLanden.landenReducer),
    EffectsModule.forFeature([LandenEffects])
  ],
  declarations: [LandenComponent],
  exports: [LandenComponent],
})
export class LandenModule { }
