import { Action } from '@ngrx/store';
import { Land } from '../interface/interface.land';

export enum LandenActionTypes {
  LANDEN_QUERY = '[Landen] Query',
  LANDEN_LOADED = '[Landen] Fetched',

  LANDEN_ADDED = '[Landen] Added',
  LANDEN_EDITED = '[Landen] Edited',
  LANDEN_DELETED = '[Landen] Deleted',

  LANDEN_ERROR = '[Landen] Error'
}

export class LandenQuery implements Action {
  readonly type = LandenActionTypes.LANDEN_QUERY;
}

export class LandenLoaded implements Action {
  readonly type = LandenActionTypes.LANDEN_LOADED;

  constructor(public payload: { landen: Land[] }) {}
}

export class LandenAdded implements Action {
  readonly type = LandenActionTypes.LANDEN_ADDED;

  constructor(public payload: { land: Land }) {}
}

export class LandenEdited implements Action {
  readonly type = LandenActionTypes.LANDEN_EDITED;

  constructor(public payload: { land: Land }) {}
}

export class LandenDeleted implements Action {
  readonly type = LandenActionTypes.LANDEN_DELETED;

  constructor(public payload: { land: Land }) {}
}

export class LandenError implements Action {
  readonly type = LandenActionTypes.LANDEN_ERROR;

  constructor(public payload: { error: any }) {}
}

export type LandenActions =
  | LandenQuery
  | LandenLoaded
  | LandenAdded
  | LandenEdited
  | LandenDeleted
  | LandenError;
