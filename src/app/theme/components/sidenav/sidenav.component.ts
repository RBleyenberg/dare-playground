import { Component, OnInit, ViewEncapsulation, DoCheck, Input } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { MenuService } from '../menu/menu.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/authentication/interface/user.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { getUser } from 'src/app/authentication/store/auth.selectors';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ MenuService ]
})

export class SidenavComponent implements OnInit, DoCheck {

  public psConfig: PerfectScrollbarConfigInterface = {
    wheelPropagation: true
  };
  public menuItems: Array<any>;
  public settings: Settings;
  @Input() user: User;
  
  constructor(public appSettings: AppSettings, public menuService: MenuService, private store: Store<AppState>) {
      this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.menuItems = this.menuService.getVerticalMenuItems();
  }

  ngDoCheck() {
    if (this.settings.fixedSidenav) {
      if (this.psConfig.wheelPropagation === true) {
        this.psConfig.wheelPropagation = false;
      }
    } else {
      if (this.psConfig.wheelPropagation === false) {
        this.psConfig.wheelPropagation = true;
      }
    }
  }

  public closeSubMenus() {
    const menu = document.getElementById('vertical-menu');
    if (menu) {
      for (let i = 0; i < menu.children[0].children.length; i++) {
        const child = menu.children[0].children[i];
        if (child) {
          if (child.children[0].classList.contains('expanded')) {
              child.children[0].classList.remove('expanded');
              child.children[1].classList.remove('show');
          }
        }
      }
    }
  }

}
