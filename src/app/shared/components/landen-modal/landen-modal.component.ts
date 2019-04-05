import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Land } from 'src/app/modules/crm/algemeen/landen/interface/interface.land';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import * as fromLanden from './../../../modules/crm/algemeen/landen/store/landen.actions';

@Component({
  selector: 'app-landen-modal',
  templateUrl: './landen-modal.component.html',
  styleUrls: ['./landen-modal.component.scss']
})
export class LandenModalComponent implements OnInit {

  @ViewChild('landForm') landForm: NgForm;
  landData: Subject<Land> = new Subject();

  constructor(public dialogRef: MatDialogRef<LandenModalComponent>, @Inject(MAT_DIALOG_DATA) public land: Land, private store: Store<AppState>,) { }

  ngOnInit() {
    console.log("modal data inside", this.land)
  }


  onSave(data) {
    if (this.landForm.valid) {
      this.landData.next(this.land);
      this.store.dispatch(new fromLanden.LandenAdded( data ));
    this.dialogRef.close();
    } else {
      const controls = this.landForm.controls;
      Object.keys(controls).forEach( controlName => controls[controlName].markAsTouched());
    }
  }

}
