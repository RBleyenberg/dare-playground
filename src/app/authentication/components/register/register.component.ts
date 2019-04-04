import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AppState } from '../../../reducers/index';
import { Store, select } from '@ngrx/store';
import * as actions from './../../store/auth.actions';
import { getError } from '../../store/auth.selectors';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { emailValidator, matchingPasswords } from 'src/app/theme/utils/app-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  error$: Observable<string | null>;
  public settings: Settings;

  constructor(public appSettings: AppSettings, private store: Store<AppState>, public fb: FormBuilder) { }

  ngOnInit() {
    this.settings = this.appSettings.settings;

    this.registerForm = this.fb.group({
      'username': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required]
    }, {validator: matchingPasswords('password', 'confirmPassword')});



    this.error$ = this.store
      .pipe(
        select(getError),
        map( (error: any) => {
          if (error) {
            if (error.code === 'auth/weak-password') {
              return error.message;
            } else if (error.code === 'auth/email-already-in-use') {
              return 'User with this email address already exist';
            }
          } else {
            return null;
          }
        })
      );
  }

  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }

  onRegister() {
    const username = this.registerForm.value.username;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    if (this.registerForm.valid) {
      this.store.dispatch(new actions.RegisterRequested({ username, email, password }));
    }
  }

}