import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { CallapiService } from '../service/callapi.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.css']
})
export class ClassroomsComponent implements OnInit {
  dataAllClassrooms: any
  dataStudentById: any
  dataTeacherById: any
  dataAllStudent: any
  dataAllTeacher: any
  formAdd: any
  dataClassroom: any
  constructor(public callapi: CallapiService, public formbuilder: FormBuilder) {
    this.formAdd = formbuilder.group({
      classroomId: null,
      classTeacher: null,
      classStudent: null

    })
  }

  ngOnInit(): void {
    this.getAllDataClassrooms()
  }


  getAllDataClassrooms() {
    this.callapi.getDataClassrooms().subscribe(i => {
      this.dataAllClassrooms = i
    })
    this.callapi.getDataStudent().subscribe(i => {
      this.dataAllStudent = i
    })
    this.callapi.getDataTeacher().subscribe(i => {
      this.dataAllTeacher = i
    })

  }
  getClassroomId(id: string) {
    this.callapi.getDataClassroomsById(id).subscribe(i => {
      this.dataClassroom = i
      console.log(this.dataClassroom)
    })
  }
  getDataStudentById(id: string) {
    this.callapi.getDataStudentById(id).subscribe(i => {
      this.dataStudentById = i
    })
  }
  getDataTeacherById(id: string) {
    this.callapi.getDataStudentById(id).subscribe(i => {
      this.dataTeacherById = i
    })
  }


  addTeadcerAndStudent() {
    this.formAdd.value.classroomId = this.dataClassroom.classroomId
    console.log(this.formAdd.value);

    if (this.formAdd.value.classTeacher != null) { this.callapi.AddTeacherInClassrooms(this.formAdd.value.classroomId, this.formAdd.value.classTeacher).subscribe(i => { this.getAllDataClassrooms() }) }
    if (this.formAdd.value.classStudent != null) { this.callapi.AddStudentInClassrooms(this.formAdd.value.classroomId, this.formAdd.value.classStudent).subscribe(i => { this.getAllDataClassrooms() }) }
    Swal.fire({
      title:'add success',
      icon:'success',
      position:'center',
      timer:1000,
      showConfirmButton:false

    })
  }
  deleteClassrooms(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.callapi.deleteClassrooms(id).subscribe(i => {
          this.getAllDataClassrooms()
        });
        Swal.fire(
          'Deleted!',
          'success'
        )
      }
    })
  }
}
