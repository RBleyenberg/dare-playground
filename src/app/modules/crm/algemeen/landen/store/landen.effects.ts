import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LandenService } from '../services/landen.service';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import * as fromLanden from './../store/landen.actions';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { LandenActionTypes } from './../store/landen.actions';
import { getUser } from 'src/app/authentication/store/auth.selectors';
import { Land } from '../interface/interface.land';

@Injectable()
export class LandenEffects {

  constructor(private actions$: Actions, private landenService: LandenService, private store: Store<AppState>) {}

  @Effect()
  query$ = this.actions$.pipe(
    ofType(LandenActionTypes.LANDEN_QUERY),
    withLatestFrom(this.store.pipe(select(getUser))),
    switchMap(([, user]: any) => this.landenService.get(user.uid)
      .pipe(
        map((data: any) => {
          const landenData: Land[] = data.map((res: any) => {
            const key = res.payload.key;
            const land: Land = res.payload.val();
            return {
              key: key,
              id: land.id,
              name: land.name,
              description: land.description
            };
          });
          return (new fromLanden.LandenLoaded({ landen: landenData }));
        }),
        catchError(error => {
          return of(new fromLanden.LandenError({ error }));
        })
      )
    ),
  );

  @Effect({ dispatch: false })
  added$ = this.actions$.pipe(
    ofType(LandenActionTypes.LANDEN_ADDED),
    map((action: fromLanden.LandenAdded) => action.payload),
    withLatestFrom(this.store.pipe(select(getUser))),
    switchMap(([payload, user]: any) => this.landenService.add(payload.land, user.uid))
  );

  @Effect({ dispatch: false })
  edit$ = this.actions$.pipe(
    ofType(LandenActionTypes.LANDEN_EDITED),
    map((action: fromLanden.LandenEdited) => action.payload),
    withLatestFrom(this.store.pipe(select(getUser))),
    switchMap(([payload, user]: any) => this.landenService.update(payload.land, user.uid)
    .pipe(
      catchError( error => {
      return of(new fromLanden.LandenError({ error }));
    }))
    )
  );

  @Effect({ dispatch: false })
  delete$ = this.actions$.pipe(
    ofType(LandenActionTypes.LANDEN_DELETED),
    map((action: fromLanden.LandenDeleted) => action.payload),
    withLatestFrom(this.store.pipe(select(getUser))),
    switchMap(([payload, user]: any) => this.landenService.delete(payload.land, user.uid))
  );
}
