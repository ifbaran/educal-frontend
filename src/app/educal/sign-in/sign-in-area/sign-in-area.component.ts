import { Component, OnInit, HostListener, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { AuthService } from 'src/app/services/authService/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-area',
  templateUrl: './sign-in-area.component.html',
  styleUrls: ['./sign-in-area.component.scss']
})
export class SignInAreaComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      type: ["", Validators.required]
    })
  }

  login() {
    let loginModel = Object.assign({}, this.loginForm.value);
    // let loginType = loginModel['type'];
    // switch (loginType) {
    //   case 'Student':

    //     break;

    //   default:
    //     break;
    // }
    this.authService.login(loginModel, loginModel['type']).subscribe(response => {
      this.toastrService.success("Successful Login...")
      localStorage.setItem("token", response.data.accessToken)
      this.router.navigate(['/home-two'])
    }, responseError => {
      this.toastrService.error("Please check your mail or password!")
    })
  }
}
