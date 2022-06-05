import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { ToastrService } from 'ngx-toastr';
import { Manager } from 'src/app/models/manager';
import { ManagerService } from 'src/app/services/managerService/manager.service';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.scss']
})
export class ManagerDetailsComponent implements OnInit {

  managerId!: Guid;
  managerForm!: FormGroup;
  manager!: Manager;

  img = 'assets/img/teacher/teacher-4.jpg';
  constructor(private activatedRoute: ActivatedRoute, private managerService: ManagerService, private toastrService: ToastrService, private router: Router, private formBuilder: FormBuilder) {
    this.activatedRoute.params.subscribe(params => {
      this.managerId = params['id'];
    });
  }

  ngOnInit(): void {
    this.createInstructorForm();
    this.getManagerById(this.managerId);
  }

  createInstructorForm() {
    this.managerForm = this.formBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", Validators.required]
    })
  }

  getManagerById(id: Guid) {
    this.managerService.getManagerById(id).subscribe(response => {
      this.manager = response.data;
      console.log(this.manager);

      this.fillTheForm();
    })
  }

  fillTheForm() {
    this.managerForm.controls['name'].setValue(this.manager.name);
    this.managerForm.controls['surname'].setValue(this.manager.surname);
    this.managerForm.controls['email'].setValue(this.manager.email);
  }

  managerUpdate() {
    let managerModel = Object.assign({}, this.managerForm.value);
    this.managerService.update(managerModel).subscribe(response => {
      this.toastrService.success(response.message)
    },
    // responseError => {
    //   this.toastrService.error(responseError.error.error.errors[0])
    // }
    )
  }

  managerDelete() {
    this.managerService.delete(this.manager.guid).subscribe(response => {
      this.toastrService.success("Manager Deleted Successful...")
      this.router.navigate(['/managers'])
    })
  }

}
