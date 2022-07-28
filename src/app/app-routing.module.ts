import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './modulos/courses/courses.component';
import { TutoresComponent } from './modulos/tutores/tutores.component';
import { DocentesComponent } from './modulos/docentes/docentes.component';
import { MainComponent } from './modulos/main/main.component';
import { NavbarComponent } from './modulos/navbar/navbar.component';
import { ToolbarComponent } from './modulos/toolbar/toolbar.component';
import { ContactFormComponent } from './modulos/contact-form/contact-form.component';
import { ProfesoresComponent } from './modulos/profesores/profesores.component';
import { TeacherComponent } from './modulos/teacher/teacher.component';
import { CrudComponent } from './modulos/crud/crud.component';

const routes: Routes = [
  
  {path: 'navbar', component: NavbarComponent},
  {path: 'toolbar', component: ToolbarComponent},
  {path: 'docentes', component: DocentesComponent },
  {path: 'tutores', component: TutoresComponent },
  {path: 'courses', component: CoursesComponent },
  {path: 'main', component: MainComponent } ,
  {path: 'contact', component: ContactFormComponent }, 
  {path: 'teacher', component: TeacherComponent } ,
  {path: 'crud', component: CrudComponent } ,
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path:'**', redirectTo: 'main'},

    
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
