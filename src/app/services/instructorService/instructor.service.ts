import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Instructor } from 'src/app/models/instructor';
import { HttpClient } from '@angular/common/http';
import { globalVariables } from 'src/app/globalVariables';
import { ResponseModel } from 'src/app/models/responseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Guid } from "guid-typescript";

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private httpClient: HttpClient) { }

  add(instructor:Instructor): Observable<ResponseModel>{
    let apiPath = globalVariables.apiUrl + "Instructor";
    return this.httpClient.post<ResponseModel>(apiPath , instructor)
  }

  update(instructor:Instructor): Observable<ResponseModel>{
    let apiPath = globalVariables.apiUrl + "Instructor";
    return this.httpClient.patch<ResponseModel>(apiPath ,instructor)
  }

  delete(id: Guid){
    let apiPath = globalVariables.apiUrl + "Instructor?Id=" + id;
    return this.httpClient.delete<ResponseModel>(apiPath)
  }

  getInstructorById(id?: Guid){
    let apiPath = globalVariables.apiUrl + "Instructor?Id=" + id;
    return this.httpClient.get<ListResponseModel<Instructor>>(apiPath)
  }
}
