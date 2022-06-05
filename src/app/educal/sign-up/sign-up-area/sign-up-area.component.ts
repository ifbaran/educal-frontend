import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { StudentService } from 'src/app/services/studentService/student.service';
import { AuthService } from 'src/app/services/authService/auth.service';
import { ManagerService } from 'src/app/services/managerService/manager.service';
import { RegistrarService } from 'src/app/services/registrarService/registrar.service';
import { CustomerService } from 'src/app/services/customerService/customer.service';
import { InstructorService } from 'src/app/services/instructorService/instructor.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up-area',
  templateUrl: './sign-up-area.component.html',
  styleUrls: ['./sign-up-area.component.scss']
})
export class SignUpAreaComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private authService: AuthService,
    private managerService: ManagerService,
    private registrarService: RegistrarService,
    private customerService: CustomerService,
    private instructorService: InstructorService,
    private toastrService: ToastrService,
    private router: Router) { }

  registerForm!: FormGroup;

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      phone: ["", Validators.required],
      type: ["", Validators.required]
    })
  }

  add() {
    var registerModel = Object.assign({}, this.registerForm.value);

    switch (this.registerForm.get(['type'])?.value) {
      case 'Student':
        registerModel = Object.assign({}, this.registerForm.value);
        this.studentService.add(registerModel).subscribe(response => {
          this.toastrService.success("Successful Register. Redirecting...")
          this.router.navigate(['/sign-in'])
        },
        responseError => {
          this.toastrService.error(responseError.error.error.errors);
        })
        break;
      case 'Registrar':
        this.registrarService.add(registerModel).subscribe(response => {
          this.toastrService.success("Successful Register. Redirecting...")
          this.router.navigate(['/sign-in'])
        },
        responseError => {
          this.toastrService.error(responseError.error.error.errors);
        })
        break;

      case 'Instructor':
        this.instructorService.add(registerModel).subscribe(response => {
          this.toastrService.success("Successful Register. Redirecting...")
          this.router.navigate(['/sign-in'])
        },
        responseError => {
          this.toastrService.error(responseError.error.error.errors);
        })
        break;

      case 'Customer':
        this.customerService.add(registerModel).subscribe(response => {
          this.toastrService.success("Successful Register. Redirecting...")
          this.router.navigate(['/sign-in'])
        },
        responseError => {
          this.toastrService.error(responseError.error.error.errors);
        })
        break;

      default:
        break;
    }
  }

}
