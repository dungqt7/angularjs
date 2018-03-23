import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { FormLoginComponent } from './form-login/form-login.component';
import {  ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    DialogComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [FormLoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
