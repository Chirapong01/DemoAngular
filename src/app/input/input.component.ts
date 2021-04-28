
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CallapiService } from '../service/callapi.service';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  submitStudent: boolean = false
  submitTeacher: boolean = false
  submitClassrooms:boolean = false
  formstudent: any
  formteacher:any
  formclassrooms:any
  constructor(public formbuilder: FormBuilder, public callapi: CallapiService) {

    this.formstudent = this.formbuilder.group({
      studentId:[null],
      studentName: [null, Validators.required],
      studentTel: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      studentAge: [null, [Validators.required, Validators.pattern('[0-9]*')]]
    })
    this.formteacher = this.formbuilder.group({
      teacherId:[null],
      teacherName: [null, Validators.required],
      teacherTel: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      subjectTaught: [null, Validators.required]
    })
    this.formclassrooms = this.formbuilder.group({
      classroomId:[null],
      classroomName: [null, Validators.required],
      classStudent: [null],
      classTeacher: [null]
    })
  }
  get formcontrolStudent() {
    return this.formstudent.controls;
  }

  get formcontrolTeacher(){
    return this.formteacher.controls;
  }

  get formcontrolClassRooms(){
    return this.formclassrooms.controls;
  }
  onsubmitStudent() {
    this.submitStudent = true;
    if (this.formstudent.valid) {
      this.callapi.addDataStudent(this.formstudent.value).subscribe(it =>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(this.formstudent.value);
      })
    }
  }
  onsubmitTeacher() {
    this.submitTeacher = true;
    if (this.formteacher.valid) {
      this.callapi.addDataTeacher(this.formteacher.value).subscribe(it =>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(this.formteacher.value);
      })
    }
  }
  onsubmitClassrooms(){
    this.submitClassrooms = true;
    console.log(this.formclassrooms.value);
    
    if (this.formclassrooms.valid) {
      this.callapi.createClassrooms(this.formclassrooms.value).subscribe(it =>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(this.formclassrooms.value);
      })
    }
  }
  ngOnInit(): void {
  }
}
