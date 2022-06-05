import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { ToastrService } from 'ngx-toastr';
import { Instructor } from 'src/app/models/instructor';
import { Lesson } from 'src/app/models/lesson';
import { InstructorService } from 'src/app/services/instructorService/instructor.service';
import { LessonService } from 'src/app/services/lessonService/lesson.service';

@Component({
  selector: 'app-instructor-details-area',
  templateUrl: './instructor-details-area.component.html',
  styleUrls: ['./instructor-details-area.component.scss']
})
export class InstructorDetailsAreaComponent implements OnInit {

  img = 'assets/img/teacher/teacger-1.jpg';
  instructorId!: Guid;
  instructor!: Instructor;
  instructorForm!: FormGroup

  constructor(private activatedRoute: ActivatedRoute,
    private instructorService: InstructorService,
    private toastrService: ToastrService,
    private router: Router,
    private lessonService: LessonService,
    private formBuilder: FormBuilder) {
    this.activatedRoute.params.subscribe(params => {
      this.instructorId = params['id'];
    });
  }

  ngOnInit(): void {
    this.createInstructorForm();
    this.getInstructorById(this.instructorId);
  }

  createInstructorForm() {
    this.instructorForm = this.formBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", Validators.required],
      courses: ["", Validators.required],
      workingDays: ["", Validators.required],
      workingStartTimes: ["", Validators.required],
      workingEndTimes: ["", Validators.required],
    })
  }

  getInstructorById(id: Guid) {
    this.instructorService.getInstructorById(id).subscribe(response => {
      this.instructor = response.data;
      this.fillTheForm();
    })
  }

  fillTheForm() {
    this.instructorForm.controls['name'].setValue(this.instructor.name);
    this.instructorForm.controls['surname'].setValue(this.instructor.surname);
    this.instructorForm.controls['email'].setValue(this.instructor.email);
  }

  updatedInstructor!: Instructor;
  instructorUpdate() {
    let instructorModel = Object.assign({}, this.instructorForm.value);
    // this.updatedInstructor.name = instructorModel['name'];
    // this.updatedInstructor.surname = instructorModel.surname;
    // this.updatedInstructor.email = instructorModel.email;
    // this.updatedInstructor.password = "12345";
    // this.updatedInstructor.lessons[0] = instructorModel.courses;
    // this.updatedInstructor.workingTimes[0].day = instructorModel.workingDays;
    // this.updatedInstructor.workingTimes[0].startTime = instructorModel.workingStartTimes;
    // this.updatedInstructor.workingTimes[0].endTime = instructorModel.workingEndTimes;

    this.instructorService.update(this.updatedInstructor).subscribe(response => {
      this.toastrService.success("Instructor Updated");
      this.router.navigate(['/instructor'])
    },
      responseError => {
        this.toastrService.error(responseError.error.error.errors[0]);
        this.router.navigate(['/instructor'])
      }
    );
  }

  lessons!: Lesson[];
  getAllLessons(){
    this.lessonService.getAllLessons().subscribe(response => {
      this.lessons = response.data;
    })
  }

  instructorDelete(){
    this.instructorService.delete(this.instructor.guid).subscribe(response => {
      this.toastrService.success("Instructor Delete Success...")
      this.router.navigate(['/instructor'])
    })
  }

  // deleteLesson(id: Guid){
  //   this.instructorService.delete(id).subscribe(response => {
  //     this.toastrService.success("Lesson Delete Success...")
  //     this.router.navigate(['/courses'])
  //   })
  // }

}
