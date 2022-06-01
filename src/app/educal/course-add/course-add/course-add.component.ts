import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { LessonService } from 'src/app/services/lessonService/lesson.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {

  courseForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private courseService: LessonService, private toastrService: ToastrService,) { }

  ngOnInit(): void {
    this.createCourseForm();
  }

  createCourseForm() {
    this.courseForm = this.formBuilder.group({
      name: ["", Validators.required]
    })
  }

  courseAdd() {
    let courseModel = Object.assign({}, this.courseForm.value);
    this.courseService.add(courseModel).subscribe(response => {
      this.toastrService.success("Course Added");
    },
      responseError => {
        this.toastrService.error(responseError.error.error.errors[0]);
      }
    );
  }

}
