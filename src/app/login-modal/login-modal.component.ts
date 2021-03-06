import {Component, Inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../services/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginModalComponent implements OnInit, OnDestroy {

  loginMode: boolean;
  loginForm: FormGroup;
  signupForm: FormGroup;
  subs: Subscription[] = [];
  loginErrorMessage: string;
  signupErrorMessage: string;
  isLoading = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: boolean,
              private authService: AuthService,
              private dialogRef: MatDialogRef<LoginModalComponent>) {
    this.loginMode = this.data;
  }

  ngOnInit(): void {
    this.initLoginForm();
    this.initSignupForm();
  }

  initLoginForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  initSignupForm(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onLoginSubmit() {
    this.isLoading = true;
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    const subscription = this.authService.login(email, password).subscribe(res => {
      this.isLoading = false;
      this.closeModal(res.email);
    },
      error => {
        this.isLoading = false;
        this.loginErrorMessage = error;
      }
    );
    this.subs.push(subscription);
  }

  onSignupSubmit() {
    this.isLoading = true;
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    const subscription = this.authService.signup(email, password).subscribe(res => {
      this.isLoading = false;
      this.closeModal(res.email);
    },
      error => {
        this.isLoading = false;
        this.signupErrorMessage = error;
      });
    this.subs.push(subscription);
  }

  closeModal(email: string): void {
    this.dialogRef.close({
      email: email,
      isLoggedIn: true
    });
  }

  ngOnDestroy(): void {
    this.subs.forEach(subscription => {
      subscription.unsubscribe();
    })
  }
}
