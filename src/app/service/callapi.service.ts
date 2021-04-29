import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { classrooms, student, teacher } from '../model/classrooms';

@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  constructor(public http: HttpClient) { }


  /////////////Student////////////
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

  //////////////Teacher///////////
  public getDataTeacher(){
    return this.http.get<teacher>(`${environment.apiUrl}Classroom/GetdataTeacherAll`);
  }
  public getDataTeacherById(id:string){
    return this.http.get<teacher>(`${environment.apiUrl}Classroom/GetdataTeacherByid/${id}`);
  }
  public addDataTeacher(teacher:teacher){
    return this.http.post<teacher>(`${environment.apiUrl}Classroom/AddDataTeacher`,teacher);
  }
  public editDataTeacher(teacher:teacher){
    return this.http.put<teacher>(`${environment.apiUrl}Classroom/EditDataTeacher`,teacher);
  }
  public deleteDataTeacher(id:string){
    return this.http.delete<teacher>(`${environment.apiUrl}Classroom/DeleteDataTeacher/${id}`)
  }

  //////////////classrooms////////////
  public getDataClassrooms(){
    return this.http.get<classrooms>(`${environment.apiUrl}Classroom/GetdataClassroomAll`)
  }
  public getDataClassroomsById(id:string){
    return this.http.get<classrooms>(`${environment.apiUrl}Classroom/GetdataClassroomByid/${id}`)
  }
  public createClassrooms(classrooms:classrooms){
    return this.http.post<classrooms>(`${environment.apiUrl}Classroom/CreateClassroom`,classrooms)
  }
  public AddTeacherInClassrooms(classroomsId:String,teacherId:string){
    return this.http.get<classrooms>(`${environment.apiUrl}Classroom/AddTeacherInClassroom/${classroomsId}/${teacherId}`)
  }
  public AddStudentInClassrooms(classroomsId:String,studentId:string){
    return this.http.get<classrooms>(`${environment.apiUrl}Classroom/AddStudentInClassroom/${classroomsId}/${studentId}`)
  }
  public deleteClassrooms(id:string){
    return this.http.delete<classrooms>(`${environment.apiUrl}Classroom/DeletedClassroom/${id}`)
  }
}