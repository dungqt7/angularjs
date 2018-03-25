import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormLoginComponent } from '../form-login/form-login.component';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  // getUrl() {
  //   return "url('https://cdn-wp.nkdev.info/snow/demo-one-page-agency/wp-content/uploads/sites/3/2017/01/home-7.jpg')";
  // }
  constructor(public dialog: MatDialog) { }
  animal: string;
  name: string;
  hiden = false;
  block;
  background;
  ul;
  hover;
  openDialog(): void {
    const dialogRef = this.dialog.open(FormLoginComponent, {
      width: '600px',
      data: { name: this.name, animal: this.animal},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      alert('Ban da dang ky thanh cong');
      this.animal = result;
    });
  }
  ngOnInit() {
  }
  @HostListener('window:scroll', [])
    onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 40) {
      this.hiden = true;
      this.block = true;
      this.background = true;
      this.ul = true;
      this.hover = true;
    } else {
        this.hiden = false;
        this.block = false;
        this.background = false;
        this.ul = false;
        this.hover = false;
    }
  }
}
