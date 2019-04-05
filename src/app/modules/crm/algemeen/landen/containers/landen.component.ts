import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromLanden from './../store/landen.actions';
import { Subscription, Observable } from 'rxjs';
import { getLanden, getIsLoading } from '../store/landen.selectors';
import { take, map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Land } from '../interface/interface.land';
import { AppState } from 'src/app/reducers';
import { LandenModalComponent } from 'src/app/shared/components/landen-modal/landen-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-landen',
  templateUrl: './landen.component.html',
  styleUrls: ['./landen.component.scss']
})
export class LandenComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean>;
  landen: Land[] | null;
  landenSub: Subscription;


  lastLandIndex: number;

  constructor(public dialog: MatDialog, private store: Store<AppState>, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(getIsLoading);

    this.landenSub = this.store.select(getLanden).pipe(
      map( (landen: Land[]) => {
        if (this.user && !landen) {
          this.store.dispatch(new fromLanden.LandenQuery());
        }
        return landen;
      })
    )
    .subscribe( (landen: Land[]) => {
      if (landen && landen.length !== 0) {
        const index: number = Number(landen[landen.length - 1].id);
        this.lastLandIndex = index;
      } else {
        this.lastLandIndex = 0;
      }

      this.landen = landen;
    });
  }

  get user() {
    return this.afAuth.auth.currentUser;
  }

  ngOnDestroy() {
    if (this.landenSub) {
      this.landenSub.unsubscribe();
    }
  }

  onAddLand() {

          let dialogRef = this.dialog.open(LandenModalComponent, {
            data: [{
              'id': '',
              'code': '',
              'naam': '' 
            }]
        });
        dialogRef.afterClosed().pipe(take(1)).subscribe( (landData: Land) => {
          this.store.dispatch(new fromLanden.LandenAdded({ land: landData }));
        });
   
  }

  openEditLandModal(land: Land) {
     this.dialog.open(LandenModalComponent, { data: land });
  }

  // openConfirmModal(land: Land) {
  //   this.modalRef = this.modalService.show(ConfirmModalComponent, this.modalConfig);

  //   this.modalRef.content.confirmation.pipe(take(1)).subscribe( (confirmation: boolean) => {
  //     if (confirmation) {
  //       this.store.dispatch(new fromLanden.LandenDeleted({ land }));
  //     }
  //   });
  // }

  onLandEdit(land: Land) {
    this.openEditLandModal(land);
  }

  // onLandDelete(land: Land) {
  //   this.openConfirmModal(land);
  // }

}
