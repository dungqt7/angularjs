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
import {map} from 'rxjs/operators';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    DialogComponent,
    FormLoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  entryComponents: [FormLoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
