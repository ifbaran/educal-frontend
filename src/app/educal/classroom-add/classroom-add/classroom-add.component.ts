import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClassroomService } from 'src/app/services/classroomService/classroom.service';
import { InstructorService } from 'src/app/services/instructorService/instructor.service';
import { LessonService } from 'src/app/services/lessonService/lesson.service';

@Component({
  selector: 'app-classroom-add',
  templateUrl: './classroom-add.component.html',
  styleUrls: ['./classroom-add.component.scss']
})
export class ClassroomAddComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private courseService: ClassroomService,
    private toastrService: ToastrService,
    private lessonService: LessonService,
    private instructorService: InstructorService
    ) { }

  classRoomForm!: FormGroup;

  ngOnInit(): void {
    this.createClassroomForm();
  }

  createClassroomForm() {
    this.classRoomForm = this.formBuilder.group({
      instructorId: ["", Validators.required],
      lessonId: ["", Validators.required],
      startDate: ["", Validators.required],
      capacity: ["", Validators.required],
      totalWeek: ["", Validators.required],
      day: ["", Validators.required],
      startTimeHour: ["", Validators.required],
      endTimeHour: ["", Validators.required],
    })
  }

  getInstructors(){
  }


  classRoomAdd(){

  }

}
