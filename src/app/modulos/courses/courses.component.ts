import { Component, OnInit } from '@angular/core';
//import { Course } from 'src/app/models/course.response';
import { CoursesService } from 'src/app/servicios/courses.service';
//import { CommonModule } from '@angular/common';
import { CourseModel } from 'src/app/models/course';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


courses!: CourseModel[];
private coursess: Subscription | any;

constructor(private coursesService: CoursesService){}

 
  ngOnInit(): void {
    this.coursess = this.coursesService.get().subscribe((courses) => {
      this.courses = courses.map(course => ({
        title: course.title,
        video: course.video,
        preview: course.preview,
        photo: course.photo
      }))
    })
  }

  ngOnDestroy(): void
  {
    this.coursess.unsubscribe();
  }

}
