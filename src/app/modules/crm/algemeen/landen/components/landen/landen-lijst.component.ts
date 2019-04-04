import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Land } from '../../interface/interface.land';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-landen-lijst',
  templateUrl: './landen-lijst.component.html',
  styleUrls: ['./landen-lijst.component.scss']
})
export class LandenLijstComponent {

  @Input() landen: Land[];
  @Output() landDeleted = new EventEmitter<Land>();
  @Output() landEdited = new EventEmitter<Land>();
    public settings: Settings;

    constructor(public appSettings: AppSettings) {
      this.settings = this.appSettings.settings;
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
