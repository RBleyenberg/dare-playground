import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Land } from 'src/app/modules/crm/algemeen/landen/interface/interface.land';

@Component({
  selector: 'app-landen-list',
  templateUrl: './landen-list.component.html',
  styleUrls: ['./landen-list.component.scss']
})
export class LandenListComponent implements OnInit {
  @Input() landen: Land[];
  @Output() landDeleted = new EventEmitter<Land>();
  @Output() landEdited = new EventEmitter<Land>();

  constructor() { }

  ngOnInit() {
  }

  onEdit(land: Land) {
    this.landEdited.emit(land);
  }

  onDelete(land: Land) {
    this.landDeleted.emit(land);
  }

  trackByFn(index: any) {
    return index;
  }
}
