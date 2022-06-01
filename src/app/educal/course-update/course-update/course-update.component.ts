import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { ToastrService } from 'ngx-toastr';
import { Lesson } from 'src/app/models/lesson';
import { LessonService } from 'src/app/services/lessonService/lesson.service';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.scss']
})
export class CourseUpdateComponent implements OnInit {

  courseUpdateForm!: FormGroup;
  courses!: Lesson[];
  currentCourse!: Lesson;
  courseOfSelection!: Lesson;
  valueWatcherSubscription! : any;

  constructor(private formBuilder: FormBuilder, private courseService: LessonService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createCourseUpdateForm();
    this.courseOfSelection = {id:Guid.parse('5ff4c1dc-05b2-453d-ab1c-57036d228101') , name: 'İngilizce'}
    this.getLessons();
  }

  createCourseUpdateForm() {
    this.courseUpdateForm = this.formBuilder.group({
      name: ["", Validators.required]
    })
  }

  getLessons() {
    this.courseService.getAllLessons().subscribe(response => {
      this.courses = response.data;
    },
      responseError => {
        this.toastrService.error(responseError.error.error.errors[0]);
      }
    );
  }

  setCurrentCourse(course:Lesson){
    this.currentCourse = course
    console.log(this.currentCourse);

  }


  courseUpdate() {

  }

}
