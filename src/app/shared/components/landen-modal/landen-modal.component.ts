
import { OnInit, ViewChild, Component } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Land } from 'src/app/modules/crm/algemeen/landen/interface/interface.land';


@Component({
  selector: 'app-landen-modal',
  templateUrl: './landen-modal.component.html',
  styleUrls: ['./landen-modal.component.scss']
})
export class LandenModalComponent implements OnInit {
  @ViewChild('landForm') landForm: NgForm;

  heading: string;
  land: Land = {};

  landData: Subject<Land> = new Subject();

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

  onSave() {
    if (this.landForm.valid) {
      this.landData.next(this.land);
    this.modalRef.hide();
    } else {
      const controls = this.landForm.controls;
      Object.keys(controls).forEach( controlName => controls[controlName].markAsTouched());
    }
  }

}
