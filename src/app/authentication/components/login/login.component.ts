import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../reducers/index';
import * as actions from './../../store/auth.actions';
import { Observable } from 'rxjs';
import { getError } from '../../store/auth.selectors';
import { map } from 'rxjs/operators';
import { emailValidator } from '../../../theme/utils/app-validators';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error$: Observable<string | null>;
    public settings: Settings;

  constructor(public appSettings: AppSettings, private store: Store<AppState>) {
      this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
        'email': new FormControl(null, Validators.compose([Validators.required, emailValidator])),
        'password': new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6)]))
    });

    this.error$ = this.store
      .pipe(
        select(getError),
        map( (error: any) => {
          if (error && (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password')) {
            return 'Invalid login or password';
          } else {
            return null;
          }
        })
      );
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  onLogin() {
    if (this.loginForm.valid) {
      this.store.dispatch(new actions.LoginRequested(this.loginForm.value));
    }
  }

  // onGoogleLogin(authProvider: string) {
  //   this.store.dispatch(new actions.SocialLogin({ authProvider }));
  // }

  // onFacebookLogin(authProvider: string) {
  //   this.store.dispatch(new actions.SocialLogin({ authProvider }));
  // }

  // onTwitterLogin(authProvider: string) {
  //   this.store.dispatch(new actions.SocialLogin({ authProvider }));
  // }

}
