import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Registrar } from 'src/app/models/registrar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { globalVariables } from 'src/app/globalVariables';
import { ResponseModel } from 'src/app/models/responseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Guid } from "guid-typescript";

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private httpClient: HttpClient) { }

  add(registrar:Registrar): Observable<ResponseModel>{
    let apiPath = globalVariables.apiUrl + "Registrar";
    let token = localStorage.getItem("token");
    const myHeaders = new HttpHeaders()
    .set('accept', '*/*')
    .set('Authorization', 'Bearer ' + token)
    .set('Content-Type', 'application/json-patch+json')
    return this.httpClient.post<ResponseModel>(apiPath ,registrar, {headers: myHeaders})
  }

  update(registrar:Registrar): Observable<ResponseModel>{
    let apiPath = globalVariables.apiUrl + "Registrar";
    let token = localStorage.getItem("token");
    const myHeaders = new HttpHeaders()
    .set('accept', '*/*')
    .set('Authorization', 'Bearer ' + token)
    .set('Content-Type', 'application/json-patch+json')
    return this.httpClient.patch<ResponseModel>(apiPath ,registrar, {headers: myHeaders})
  }

  delete(id: Guid){
    let apiPath = globalVariables.apiUrl + "Registrar/" + id;
    let token = localStorage.getItem("token");
    const myHeaders = new HttpHeaders()
    .set('accept', '*/*')
    .set('Authorization', 'Bearer ' + token)
    .set('Content-Type', 'application/json-patch+json')
    return this.httpClient.delete<ResponseModel>(apiPath, {headers: myHeaders})
  }

  getRegistrarById(id?: Guid){
    let apiPath = globalVariables.apiUrl + "Registrar/" + id;
    let token = localStorage.getItem("token");
    const myHeaders = new HttpHeaders()
    .set('accept', '*/*')
    .set('Authorization', 'Bearer ' + token)
    .set('Content-Type', 'application/json-patch+json')
    return this.httpClient.get<ListResponseModel<Registrar>>(apiPath, {headers: myHeaders})
  }
}
