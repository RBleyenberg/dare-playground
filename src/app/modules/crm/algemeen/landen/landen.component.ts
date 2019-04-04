import { Component } from '@angular/core';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';

@Component({
  selector: 'app-landen',
  templateUrl: './landen.component.html'
})
export class LandenComponent {
    

    public settings: Settings;
    constructor(public appSettings:AppSettings) { 
      this.settings = this.appSettings.settings; 
    }

}