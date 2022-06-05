import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { globalVariables } from 'src/app/globalVariables';
import { ResponseModel } from 'src/app/models/responseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Guid } from "guid-typescript";

import { Customer } from 'src/app/models/customer';
import { Instructor } from 'src/app/models/instructor';
import { Manager } from 'src/app/models/manager';
import { Registrar } from 'src/app/models/registrar';
import { Student } from 'src/app/models/student';
import { LoginModel } from 'src/app/models/loginModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { TokenModel } from 'src/app/models/tokenModel';
import { StudentService } from '../studentService/student.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  userType: any;
  loginModel!: LoginModel;
  type!: string;

  login(loginModel: LoginModel, type: string) {
    this.loginModel = loginModel;
    this.type = type;
    let apiPath = globalVariables.apiUrl + "Auth/" + type;
    return this.httpClient.post<SingleResponseModel<TokenModel>>(apiPath, loginModel);
  }

  isAuthenticated() {
    return localStorage.getItem("token") ? true : false;
  }

  getLoggedUserByEmail() {
    let apiPath = globalVariables.apiUrl + this.type + "/" + "Email/" + this.loginModel.email;
    let token = localStorage.getItem("token")
      const myHeaders = new HttpHeaders()
      .set('accept', '*/*')
      .set('Authorization', 'Bearer ' + token)
      .set('Content-Type', 'application/json-patch+json')
    if (this.type == "Student") {
      return this.httpClient.get<SingleResponseModel<Student>>(apiPath, {headers: myHeaders});
    }
    else if (this.type == "Instructor") {
      return this.httpClient.get<SingleResponseModel<Instructor>>(apiPath, {headers: myHeaders});
    }
    else if (this.type == "Manager") {
      return this.httpClient.get<SingleResponseModel<Manager>>(apiPath, {headers: myHeaders});
    }
    else if (this.type == "Registrar") {
      return this.httpClient.get<SingleResponseModel<Registrar>>(apiPath, {headers: myHeaders});
    }
    else {
      return this.httpClient.get<SingleResponseModel<Customer>>(apiPath, {headers: myHeaders});
    }
  }
}
