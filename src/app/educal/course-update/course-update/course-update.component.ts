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
  currentCourseName!: string;
  currentCourseId!: Guid;
  courseOfSelection!: Lesson;
  activeCourse!: Lesson;
  valueWatcherSubscription!: any;

  constructor(private formBuilder: FormBuilder, private courseService: LessonService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createCourseUpdateForm();
    this.getLessons();
  }

  createCourseUpdateForm() {
    this.courseUpdateForm = this.formBuilder.group({
      lessonGuid: ["", Validators.required],
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

  setCurrentCourse(e: any) {
    this.courseUpdateForm.get('name')?.setValue(e.target.value);
    this.currentCourseName = e.target.value;
    this.courseService.getAllLessons().forEach(courses => {
      courses.data.forEach(course => {
        if (course.name == this.currentCourseName) {
          this.activeCourse = course;
          this.courseUpdateForm.get('lessonGuid')?.setValue(course.guid);
        }
      })
    })

  }


  courseUpdate() {
    let courseModel = Object.assign({}, this.courseUpdateForm.value);
    console.log(courseModel['name']);

    this.courseService.update(courseModel).subscribe(response => {
      this.toastrService.success(response.message);
    },
      responseError => {
        this.toastrService.error(responseError.error.error.errors[0]);
      }
    )
  }

}
