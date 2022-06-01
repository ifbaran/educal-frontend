import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Lesson } from 'src/app/models/lesson';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { globalVariables } from 'src/app/globalVariables';
import { ResponseModel } from 'src/app/models/responseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Guid } from "guid-typescript";
@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private httpClient: HttpClient) { }

  add(lesson:Lesson): Observable<ResponseModel>{
    let token = localStorage.getItem("token");
    const myHeaders = new HttpHeaders()
    .set('accept', '*/*')
    .set('Authorization', 'Bearer ' + token)
    .set('Content-Type', 'application/json-patch+json')
    let apiPath = globalVariables.apiUrl + "Lesson";
    return this.httpClient.post<ResponseModel>(apiPath , lesson, {headers: myHeaders})
  }

  update(lesson:Lesson): Observable<ResponseModel>{
    let apiPath = globalVariables.apiUrl + "Lesson";
    return this.httpClient.patch<ResponseModel>(apiPath ,lesson)
  }

  delete(id: Guid){
    let apiPath = globalVariables.apiUrl + "Lesson?Id=" + id;
    return this.httpClient.delete<ResponseModel>(apiPath)
  }

  getLessonById(id?: Guid){
    let apiPath = globalVariables.apiUrl + "Lesson?Id=" + id;
    return this.httpClient.get<ListResponseModel<Lesson>>(apiPath)
  }

  getAllLessons(){
    let apiPath = globalVariables.apiUrl + "Lesson";
    let token = localStorage.getItem("token");
    const myHeaders = new HttpHeaders()
    .set('accept', '*/*')
    .set('Authorization', 'Bearer ' + token)
    .set('Content-Type', 'application/json-patch+json')
    return this.httpClient.get<ListResponseModel<Lesson>>(apiPath, {headers: myHeaders});
  }
}
