import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
const Module = [
  MatFormFieldModule,
  MatSelectModule, 
  MatInputModule,
];
@NgModule({
  imports: [
    CommonModule,
    ...Module
  ],
  exports: [...Module],
  declarations: []
})
export class MaterialModule { }
