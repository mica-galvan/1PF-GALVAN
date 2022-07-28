import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modulos/navbar/navbar.component';
import { ToolbarComponent } from './modulos/toolbar/toolbar.component';
import { MainComponent } from './modulos/main/main.component';
import { StudentsListDirective } from './list/students-list.directive';
import { StudentsListComponent } from './list/students-list/students-list.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { MatTableModule } from '@angular/material/table' 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './modulos/courses/courses.component';
import { HttpClientModule } from '@angular/common/http';
import { DocentesComponent } from './modulos/docentes/docentes.component';
import { TutoresComponent } from './modulos/tutores/tutores.component';
import { TeacherComponent } from './modulos/teacher/teacher.component';

import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './modulos/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudComponent } from './modulos/crud/crud.component';
import { teacherDetailComponent } from './modulos/teacher-detail/teacher-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    MainComponent,
    StudentsListDirective,
    StudentsListComponent,
    CoursesComponent,
    DocentesComponent,
    TutoresComponent,
    TeacherComponent,
    teacherDetailComponent,
    ContactFormComponent,
    CrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
