import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from 'src/app/models/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { globalVariables } from 'src/app/globalVariables';
import { ResponseModel } from 'src/app/models/responseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Guid } from "guid-typescript";
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  add(student:Student): Observable<ResponseModel>{
    let apiPath = globalVariables.apiUrl + "Student";
    let token = localStorage.getItem("token");
    const myHeaders = new HttpHeaders()
    .set('accept', '*/*')
    .set('Authorization', 'Bearer ' + token)
    .set('Content-Type', 'application/json-patch+json')
    return this.httpClient.post<ResponseModel>(apiPath ,student, {headers : myHeaders})
  }

  update(student:Student): Observable<ResponseModel>{
    let apiPath = globalVariables.apiUrl + "Student";
    let token = localStorage.getItem("token");
    const myHeaders = new HttpHeaders()
    .set('accept', '*/*')
    .set('Authorization', 'Bearer ' + token)
    .set('Content-Type', 'application/json-patch+json')
    return this.httpClient.patch<ResponseModel>(apiPath ,student, {headers : myHeaders})
  }

  delete(id: Guid){
    let apiPath = globalVariables.apiUrl + "Student/" + id;
    let token = localStorage.getItem("token");
    const myHeaders = new HttpHeaders()
    .set('accept', '*/*')
    .set('Authorization', 'Bearer ' + token)
    .set('Content-Type', 'application/json-patch+json')
    return this.httpClient.delete<ResponseModel>(apiPath, {headers : myHeaders})
  }

  getStudentById(id?: Guid){
    let apiPath = globalVariables.apiUrl + "Student/" + id;
    let token = localStorage.getItem("token");
    const myHeaders = new HttpHeaders()
    .set('accept', '*/*')
    .set('Authorization', 'Bearer ' + token)
    .set('Content-Type', 'application/json-patch+json')
    return this.httpClient.get<SingleResponseModel<Student>>(apiPath, {headers : myHeaders})
  }
}
