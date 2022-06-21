import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../Models/category';
import { ListResponseModel } from '../Models/ListResponseModel';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = 'https://localhost:7196/api/department/GetDepartment'

  constructor(private httpClient:HttpClient) { }
  getDepartments():Observable<ListResponseModel<Department>>{
    return this.httpClient.get<ListResponseModel<Department>>(this.apiUrl);
  }
}
