import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/servicios/message.service';
import { TeacherService } from '../../servicios/teacher.service';
import { Teacher } from '../../servicios/teacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  selectedTeacher!: Teacher;
 
  teachers!: Teacher[];

  constructor(
    private teacherService: TeacherService,
    private messageService: MessageService
     ) { }

  ngOnInit() {
    this.getTeachers();
  }

  onSelect(teacher: Teacher): void {
    this.selectedTeacher = teacher;
    this.messageService.add(`TeacherComponent: Selected teacher id=${teacher.id}`);
  }

  getTeachers(): void {
    this.teacherService.getTeachers()
        .subscribe(teachers => this.teachers = teachers);
  }
}

