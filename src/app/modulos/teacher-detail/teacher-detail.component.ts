import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from 'src/app/servicios/teacher';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class teacherDetailComponent implements OnInit {

  @Input()
    teacher!: Teacher;

  constructor() { }

  ngOnInit() {
  }

}