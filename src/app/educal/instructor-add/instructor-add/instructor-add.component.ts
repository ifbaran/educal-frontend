import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InstructorService } from 'src/app/services/instructorService/instructor.service';

@Component({
  selector: 'app-instructor-add',
  templateUrl: './instructor-add.component.html',
  styleUrls: ['./instructor-add.component.scss']
})
export class InstructorAddComponent implements OnInit {

  instructorForm!: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private instructorService: InstructorService,
    private toastrService: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.createInstructorForm();
  }

  createInstructorForm() {
    this.instructorForm = this.formBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  instructorAdd(){
    let instructorModel = Object.assign({}, this.instructorForm.value);
    this.instructorService.add(instructorModel).subscribe(response => {
      this.toastrService.success("Instructor Added");
      this.router.navigate(['/instructor'])
    },
      responseError => {
        this.toastrService.error(responseError.error.error.errors[0]);
      }
    );
  }
}
