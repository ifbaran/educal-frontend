import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Manager } from 'src/app/models/manager';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { globalVariables } from 'src/app/globalVariables';
import { ResponseModel } from 'src/app/models/responseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Guid } from "guid-typescript";
import { SingleResponseModel } from 'src/app/models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private httpClient: HttpClient) { }

  add(manager:Manager): Observable<ResponseModel>{
    let apiPath = globalVariables.apiUrl + "Manager";
    let token = localStorage.getItem("token");
    const myHeaders = new HttpHeaders()
    .set('accept', '*/*')
    .set('Authorization', 'Bearer ' + token)
    .set('Content-Type', 'application/json-patch+json')
    return this.httpClient.post<ResponseModel>(apiPath ,manager, {headers: myHeaders})
  }

  update(manager:Manager): Observable<ResponseModel>{
    let apiPath = globalVariables.apiUrl + "Manager";
    manager.password = "12345"
    let token = localStorage.getItem("token");
    const myHeaders = new HttpHeaders()
    .set('accept', '*/*')
    .set('Authorization', 'Bearer ' + token)
    .set('Content-Type', 'application/json-patch+json')
    return this.httpClient.put<ResponseModel>(apiPath ,manager, {headers: myHeaders})
  }

  delete(id: Guid){
    let apiPath = globalVariables.apiUrl + "Manager/" + id;
    let token = localStorage.getItem("token");
    const myHeaders = new HttpHeaders()
    .set('accept', '*/*')
    .set('Authorization', 'Bearer ' + token)
    .set('Content-Type', 'application/json-patch+json')
    return this.httpClient.delete<ResponseModel>(apiPath, {headers: myHeaders})
  }

  getAllManagers(){
    let apiPath = globalVariables.apiUrl + "Manager/"
    let token = localStorage.getItem("token");
    const myHeaders = new HttpHeaders()
    .set('accept', '*/*')
    .set('Authorization', 'Bearer ' + token)
    .set('Content-Type', 'application/json-patch+json')
    return this.httpClient.get<ListResponseModel<Manager>>(apiPath, {headers: myHeaders})
  }

  getManagerById(id?: Guid){
    let apiPath = globalVariables.apiUrl + "Manager/" + id;
    let token = localStorage.getItem("token");
    const myHeaders = new HttpHeaders()
    .set('accept', '*/*')
    .set('Authorization', 'Bearer ' + token)
    .set('Content-Type', 'application/json-patch+json')
    return this.httpClient.get<SingleResponseModel<Manager>>(apiPath, {headers: myHeaders})
  }
}
