import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  constructor() { }
  usernameFormControl = new FormControl('', [
    Validators.required,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  register(event) {
    if (this.usernameFormControl.value !== '' && this.passwordFormControl.value !== '') {
      alert('Dang nhap thanh cong');
    }
  }
  ngOnInit() {
  }
}
