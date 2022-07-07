import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modulos/navbar/navbar.component';
import { ToolbarComponent } from './modulos/toolbar/toolbar.component';
import { MainComponent } from './modulos/main/main.component';
import { StudentsListDirective } from './list/students-list.directive';
import { StudentsListComponent } from './list/students-list/students-list.component';
import { ContactFormComponent } from './modulos/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    MainComponent,
    StudentsListDirective,
    StudentsListComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
