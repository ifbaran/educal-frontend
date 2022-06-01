import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { globalVariables } from 'src/app/globalVariables';
import { Customer } from 'src/app/models/customer';
import { ResponseModel } from 'src/app/models/responseModel';
import { Guid } from "guid-typescript";
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  add(customer:Customer): Observable<ResponseModel>{
    let apiPath = globalVariables.apiUrl + "Customer";
    return this.httpClient.post<ResponseModel>(apiPath , customer)
  }

  update(customer:Customer): Observable<ResponseModel>{
    let apiPath = globalVariables.apiUrl + "Customer";
    return this.httpClient.patch<ResponseModel>(apiPath ,customer)
  }

  delete(id: Guid){
    let apiPath = globalVariables.apiUrl + "Customer?Id=" + id;
    return this.httpClient.delete<ResponseModel>(apiPath)
  }

  getCustomerById(id?: Guid){
    let apiPath = globalVariables.apiUrl + "Customer?Id=" + id;
    return this.httpClient.get<ListResponseModel<Customer>>(apiPath)
  }
}
