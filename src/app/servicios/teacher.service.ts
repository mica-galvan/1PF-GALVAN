import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Teacher } from './teacher';
import { TEACHERS } from './mock-teacher';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {

  constructor(private messageService: MessageService) { }

  getTeachers(): Observable<Teacher[]> {
    
    this.messageService.add('TeacherService: fetched teachers');
    return of(TEACHERS);
  }

  getTeacher(id: number | string) {
    return this.getTeachers().pipe(
      // (+) before `id` turns the string into a number
      map((teachers: Teacher[]) => teachers.find(teacher => teacher.id === +id))
    );
  }
}
