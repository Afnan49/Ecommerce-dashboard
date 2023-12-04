import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  displayForm: String = "mail"
  get email() {
    return this.resetPasswordForm.get('email');
  }
  get code() {
    return this.resetPasswordForm.get('code');
  }
  get password() {
    return this.resetPasswordForm.get('password');
  }
  get conPassword() {
    return this.resetPasswordForm.get('conPassword');
  }
  constructor(private formBuilder: FormBuilder,
    private router: Router,){
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      code: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
      password: ['', [Validators.required]],
      conPassword: ['', [Validators.required]],
    });
  }
  goEnterEmail(){
    
  }
  sendCode(){
    this.displayForm = "code"
    console.log(
      this.email.value,"\n",
      this.code.value,"\n",
      this.password.value,"\n",
      this.conPassword.value,"\n"
      );
    
  }
  verifyCode(){
    this.displayForm = "password"
    console.log(
      this.email.value,"\n",
      this.code.value,"\n",
      this.password.value,"\n",
      this.conPassword.value,"\n"
      );
  }
  resetPassword(){
    this.displayForm = "mail"
    console.log(
      this.email.value,"\n",
      this.code.value,"\n",
      this.password.value,"\n",
      this.conPassword.value,"\n"
      );
  }
}
