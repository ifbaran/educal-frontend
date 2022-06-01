import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { City } from 'src/app/models/city';
import { HttpClient } from '@angular/common/http';
import { globalVariables } from 'src/app/globalVariables';
import { ResponseModel } from 'src/app/models/responseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Guid } from "guid-typescript";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) { }

  getCityByPlate(plate?: number){
    let apiPath = globalVariables.apiUrl + "City?Id=" + plate;
    return this.httpClient.get<ListResponseModel<City>>(apiPath)
  }
}
