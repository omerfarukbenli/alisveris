import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/ListResponseModel';
import { Employee } from '../Models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:7196/api/employee/GetEmployee'

  constructor(private httpClient:HttpClient) { }
  getEmployees():Observable<ListResponseModel<Employee>>{
    return this.httpClient.get<ListResponseModel<Employee>>(this.apiUrl);
  }
}
