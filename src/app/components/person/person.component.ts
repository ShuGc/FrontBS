import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonComponent {
  private API_SERVER = "http://localhost:8080/employee"

  constructor(private httpClient: HttpClient) { }

  public getAllEmployees(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public saveEmployee (employee:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,employee);
  }

  public deleteEmployee(id:any):Observable<any>{
    return this.httpClient.delete(this.API_SERVER + "/delete/"+id);
  }

}
