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
  displayedColumns: string[] = ['id', 'code', 'naam', 'actions'];

  constructor() { }

  ngOnInit() {
  }

  onEdit(element) {
    console.log("onEdit", element)
    this.landEdited.emit(element);
  }

  onDelete(element) {
    this.landDeleted.emit(element);
  }
}
