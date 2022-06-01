import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Registrar } from 'src/app/models/registrar';
import { HttpClient } from '@angular/common/http';
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
    return this.httpClient.post<ResponseModel>(apiPath ,registrar)
  }

  update(registrar:Registrar): Observable<ResponseModel>{
    let apiPath = globalVariables.apiUrl + "Registrar";
    return this.httpClient.patch<ResponseModel>(apiPath ,registrar)
  }

  delete(id: Guid){
    let apiPath = globalVariables.apiUrl + "Registrar?Id=" + id;
    return this.httpClient.delete<ResponseModel>(apiPath)
  }

  getRegistrarById(id?: Guid){
    let apiPath = globalVariables.apiUrl + "Registrar?Id=" + id;
    return this.httpClient.get<ListResponseModel<Registrar>>(apiPath)
  }
}
