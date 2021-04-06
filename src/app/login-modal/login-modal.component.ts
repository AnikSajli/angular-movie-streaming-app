import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  loginMode: boolean;
  loginForm: FormGroup;
  signupForm: FormGroup;

  constructor( @Inject(MAT_DIALOG_DATA) public data: boolean) {
    this.loginMode = this.data;
  }

  ngOnInit(): void {
    this.initLoginForm();
    this.initSignupForm();
  }

  initLoginForm(): any {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  initSignupForm(): any {
    this.signupForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onLoginSubmit() {
   console.log(this.loginForm.value);
  }

  onSignupSubmit() {
    console.log(this.signupForm.value);
  }
}
