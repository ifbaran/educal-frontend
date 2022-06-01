import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from 'src/app/models/student';
import { HttpClient } from '@angular/common/http';
import { globalVariables } from 'src/app/globalVariables';
import { ResponseModel } from 'src/app/models/responseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Guid } from "guid-typescript";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  add(student:Student): Observable<ResponseModel>{
    let apiPath = globalVariables.apiUrl + "Student";
    return this.httpClient.post<ResponseModel>(apiPath ,student)
  }

  update(student:Student): Observable<ResponseModel>{
    let apiPath = globalVariables.apiUrl + "Student";
    return this.httpClient.patch<ResponseModel>(apiPath ,student)
  }

  delete(id: Guid){
    let apiPath = globalVariables.apiUrl + "Student?Id=" + id;
    return this.httpClient.delete<ResponseModel>(apiPath)
  }

  getStudentById(id?: Guid){
    let apiPath = globalVariables.apiUrl + "Student?Id=" + id;
    return this.httpClient.get<ListResponseModel<Student>>(apiPath)
  }
}
