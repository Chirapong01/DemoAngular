import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { student } from '../model/classrooms';

@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  constructor(public http: HttpClient) { }

  public getDataStudent(){
    return this.http.get<student>(`${environment.apiUrl}Classroom/GetdataStudentAll`);
  }
  public getDataStudentById(id:String){
    return this.http.get<student>(`${environment.apiUrl}Classroom/GetdataStudentByid/${id}`);
  }
  public addDataStudent(student:student){
    return this.http.post<student>(`${environment.apiUrl}Classroom/AddDataStudent`,student);
  }
  public editDataStudent(student:student){
    return this.http.put<student>(`${environment.apiUrl}Classroom/EditDataStudent`,student);
  }
  public deleteDataStudent(id:String){
    return this.http.delete<student>(`${environment.apiUrl}Classroom/DeleteDataStudent/${id}`)
  }
}