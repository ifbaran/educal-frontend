import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { globalVariables } from 'src/app/globalVariables';
import { Classroom } from 'src/app/models/classroom';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(private httpClient: HttpClient) { }

  add(classroom:Classroom): Observable<ResponseModel>{
    let apiPath = globalVariables.apiUrl + "Classroom";
    return this.httpClient.post<ResponseModel>(apiPath , classroom)
  }

  update(classroom:Classroom): Observable<ResponseModel>{
    let apiPath = globalVariables.apiUrl + "Classroom";
    return this.httpClient.patch<ResponseModel>(apiPath ,classroom)
  }

  delete(id: Guid){
    let apiPath = globalVariables.apiUrl + "Classroom/" + id;
    return this.httpClient.delete<ResponseModel>(apiPath)
  }

  getClassroomById(id?: Guid){
    let apiPath = globalVariables.apiUrl + "Classroom/" + id;
    return this.httpClient.get<ListResponseModel<Classroom>>(apiPath)
  }

  updateClassroomInstructor(updateClassroomInstructorModel: ClassroomInstructorModel){
    let apiPath = globalVariables.apiUrl + "Classroom/Instructor";
    return this.httpClient.patch<ResponseModel>(apiPath , {body: updateClassroomInstructorModel})
  }

  addClassroomStudent(classroomStudentModel:ClassroomStudentModel): Observable<ResponseModel>{
    let apiPath = globalVariables.apiUrl + "Classroom/Student";
    return this.httpClient.post<ResponseModel>(apiPath , {body: classroomStudentModel})
  }

  deleteClassroomStudent(classroomStudentModel:ClassroomStudentModel){
    let apiPath = globalVariables.apiUrl + "Classroom/Student";
    return this.httpClient.delete<ResponseModel>(apiPath , {body: classroomStudentModel})
  }
}

export interface ClassroomInstructorModel {
  classroomId: Guid,
  instructorId: Guid
}

export interface ClassroomStudentModel {
  classroomId: Guid,
  studentId: Guid
}
