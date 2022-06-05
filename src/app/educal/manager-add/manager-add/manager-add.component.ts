import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ManagerService } from 'src/app/services/managerService/manager.service';

@Component({
  selector: 'app-manager-add',
  templateUrl: './manager-add.component.html',
  styleUrls: ['./manager-add.component.scss']
})
export class ManagerAddComponent implements OnInit {

  managerForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private managerService: ManagerService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createManagerForm();
  }

  createManagerForm() {
    this.managerForm = this.formBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
    })
  }

  managerAdd(){
    this.managerService.add(this.managerForm.value).subscribe(response => {
      this.toastrService.success("Manager added");
      this.router.navigate(['/managers'])
    },
    responseError => {
      this.toastrService.error(responseError.error.error.errors[0])
    })
  }

}
