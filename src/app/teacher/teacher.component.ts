import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CallapiService } from '../service/callapi.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  submitEdit:boolean = false
  formedit: any
  dataTeacher: any
  dataEdit:any
  constructor(public callapi: CallapiService, public formbuilder: FormBuilder) {
    this.formedit = formbuilder.group(
      {
        teacherId: [null],
        teacherName: [null, Validators.required],
        teacherTel: [null, [Validators.required, Validators.pattern('[0-9]*')]],
        subjectTaught: [null, Validators.required]
      }
    )
  }
  get formcontrolTeacher(){
    return this.formedit.controls
  }
  ngOnInit(): void {
    this.getDataTeacher();
  }
  getDataTeacher() {
    this.callapi.getDataTeacher().subscribe(i => {
      this.dataTeacher = i
    })
  }
  getIdTeacher(teacherId:string){
    this.callapi.getDataTeacherById(teacherId).subscribe(i=>{
      this.dataEdit = i
    })
  }

  deleteDataTeacher(id:string){
    
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.callapi.deleteDataTeacher(id).subscribe(i => {
          this.getDataTeacher()
        });
        Swal.fire(
          'Deleted!',
          'success'
        )
      }
    })
  }

  submitEditDataTeacher(){
    this.submitEdit = true
    this.formedit.value.teacherId = this.dataEdit.teacherId
    if(this.formedit.valid){
      this.callapi.editDataTeacher(this.formedit.value).subscribe(i=>{
        Swal.fire(
          {
            position: 'center',
            icon:'success',
            title: 'Edit Success',
            timer: 1000,
            showConfirmButton: false
          }
          )
        this.getDataTeacher()
       
      })
    }
  }
}
