import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Lesson } from 'src/app/models/lesson';
import { StudentService } from 'src/app/services/studentService/student.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {

  img = "assets/img/course/list/course-1.jpg";
  courseData: Lesson[] = [];

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.getMyCourses();
  }

  getMyCourses(){
    let id = localStorage.getItem("user");
    this.studentService.getStudentById(Guid.parse(id!)).subscribe(response => {
      this.courseData.push(response.data.classroom['lesson'])
    })
  }

}
