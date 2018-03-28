import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export function forbiddenUsername(users = []) {
  return (c: AbstractControl) => {
    return (users.includes(c.value)) ? {
      invalidusername: true
    } : null;
  };
}
export function forbiddenEmail(email = []) {
  return (c: AbstractControl) => {
    return (email.includes(c.value)) ? {
      invalidemail: true
    } : null;
  };
}
export function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})

export class FormLoginComponent implements OnInit {
  form: FormGroup;
  ispecial;
  favoriteSeason: string;

  seasons = [
    'Men',
    'Women',
  ];
  // tslint:disable-next-line:no-unused-expression
emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
]);
usernameFormControl = new FormControl('', [
  Validators.required,
]);
constructor(private fb: FormBuilder, public dialogRef: MatDialogRef < FormLoginComponent >,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
ngOnInit() {
  this.form = this.fb.group({
    username: ['', [Validators.required, forbiddenUsername(['dung', 'dat'])]],
    email: ['', [forbiddenEmail(['admin@gmail.com', 'admin1@gmail.com'])]],
    pw: this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, {
        validator: comparePassword
      })
  });
}
onSubmit(event) {
  if (this.form.value.password === this.form.value.confirmPassword) {
    this.ispecial = true;
  }
  if (this.form.value.username === ['dung', 'dat']) {
    this.ispecial = true;
  }
  this.ispecial = true;
}
onNoClick() {
  this.dialogRef.close();
}
}
