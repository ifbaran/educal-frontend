import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Manager } from 'src/app/models/manager';
import { HttpClient } from '@angular/common/http';
import { globalVariables } from 'src/app/globalVariables';
import { ResponseModel } from 'src/app/models/responseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Guid } from "guid-typescript";


@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private httpClient: HttpClient) { }

  add(manager:Manager): Observable<ResponseModel>{
    let apiPath = globalVariables.apiUrl + "Manager";
    return this.httpClient.post<ResponseModel>(apiPath ,manager)
  }

  update(manager:Manager): Observable<ResponseModel>{
    let apiPath = globalVariables.apiUrl + "Manager";
    return this.httpClient.patch<ResponseModel>(apiPath ,manager)
  }

  delete(id: Guid){
    let apiPath = globalVariables.apiUrl + "Manager?Id=" + id;
    return this.httpClient.delete<ResponseModel>(apiPath)
  }

  getManagerById(id?: Guid){
    let apiPath = globalVariables.apiUrl + "Manager?Id=" + id;
    return this.httpClient.get<ListResponseModel<Manager>>(apiPath)
  }
}
