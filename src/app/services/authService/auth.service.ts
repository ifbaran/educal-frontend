import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
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

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(loginModel: LoginModel, type: string) {
    let apiPath = globalVariables.apiUrl + "Auth/" + type;
    return this.httpClient.post<SingleResponseModel<TokenModel>>(apiPath, loginModel);
  }

  isAuthenticated() {
    return localStorage.getItem("token") ? true : false;
  }
}
