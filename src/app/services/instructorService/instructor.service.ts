import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Instructor } from 'src/app/models/instructor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { globalVariables } from 'src/app/globalVariables';
import { ResponseModel } from 'src/app/models/responseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Guid } from "guid-typescript";
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { multicast } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private httpClient: HttpClient) { }

  add(instructor:Instructor): Observable<ResponseModel>{
    let apiPath = globalVariables.apiUrl + "Instructor";
    let token = localStorage.getItem('token');
      const myHeaders = new HttpHeaders()
      .set('accept', '*/*')
      .set('Authorization', 'Bearer ' + token)
      .set('Content-Type', 'application/json-patch+json')
      instructor.password = "12345"
    return this.httpClient.post<ResponseModel>(apiPath , instructor, {headers: myHeaders})
  }

  update(instructor:Instructor): Observable<ResponseModel>{
    let apiPath = globalVariables.apiUrl + "Instructor";
    let token = localStorage.getItem('token');
      const myHeaders = new HttpHeaders()
      .set('accept', '*/*')
      .set('Authorization', 'Bearer ' + token)
      .set('Content-Type', 'application/json-patch+json')
      instructor.password = "12345"
    return this.httpClient.put<ResponseModel>(apiPath ,instructor, {headers: myHeaders})
  }

  delete(id: Guid){
    let apiPath = globalVariables.apiUrl + "Instructor/" + id;
    let token = localStorage.getItem('token');
      const myHeaders = new HttpHeaders()
      .set('accept', '*/*')
      .set('Authorization', 'Bearer ' + token)
      .set('Content-Type', 'application/json-patch+json')
    return this.httpClient.delete<ResponseModel>(apiPath, {headers: myHeaders})
  }

  getAll(){
    let apiPath = globalVariables.apiUrl + "Instructor";
    let token = localStorage.getItem('token');
      const myHeaders = new HttpHeaders()
      .set('accept', '*/*')
      .set('Authorization', 'Bearer ' + token)
      .set('Content-Type', 'application/json-patch+json')
    return this.httpClient.get<ListResponseModel<Instructor>>(apiPath, {headers: myHeaders})
  }

  getInstructorById(id?: Guid) : Observable<SingleResponseModel<Instructor>>{
    let apiPath = globalVariables.apiUrl + "Instructor/" + id;
    let token = localStorage.getItem('token');
      const myHeaders = new HttpHeaders()
      .set('accept', '*/*')
      .set('Authorization', 'Bearer ' + token)
      .set('Content-Type', 'application/json-patch+json')
    return this.httpClient.get<SingleResponseModel<Instructor>>(apiPath, {headers: myHeaders})
  }
}
