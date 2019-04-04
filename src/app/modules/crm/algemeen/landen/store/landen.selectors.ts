import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LandenState } from './landen.state';

export const getLandenState = createFeatureSelector<LandenState>('landen');

export const getLanden = createSelector(
  getLandenState,
  landen => landen.landen
);

export const getIsLoading = createSelector(
  getLandenState,
  landen => landen.isLoading
);

export const getError = createSelector(
  getLandenState,
  landen => landen.error
);
