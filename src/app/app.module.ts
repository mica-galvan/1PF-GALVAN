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
import { FormsModule } from '@angular/forms';
import { CrudComponent } from './modulos/crud/crud.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { MatTableModule } from '@angular/material/table' 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './modulos/courses/courses.component';
import { HttpClientModule } from '@angular/common/http';
import { DocentesComponent } from './modulos/docentes/docentes.component';
import { TutoresComponent } from './modulos/tutores/tutores.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    MainComponent,
    StudentsListDirective,
    StudentsListComponent,
    ContactFormComponent,
    CrudComponent,
    CoursesComponent,
    DocentesComponent,
    TutoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
