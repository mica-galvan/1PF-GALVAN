import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProfesorModel } from '../models/profesor';
import { ProfesorResponseModel } from '../models/profesor-response.model';
//import { Course } from '../models/course.response';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  constructor() { 
    
  }
  
//get(): Observable<Course[]> {
get(): Observable<ProfesorResponseModel[]> {
  return of(
    [
      {name: 'Alberto',
      category   : 'Programación',
     
    
  },
  { name: 'Mariana',
      category   : 'Diseño',
     
    
  },
  { name: 'Martin',
  category   : 'Marketing',


},
    ]
  )
}}