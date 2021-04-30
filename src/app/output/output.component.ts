import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';
import Swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  submitEdit:boolean = false
  formedit: any
  dataStudent: any
  dataEdit: any
  constructor(public callapi: CallapiService, public formbuilder: FormBuilder) {
    this.formedit = this.formbuilder.group({
      studentId: null,
      studentName: [null, Validators.required],
      studentTel: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      studentAge: [null, [Validators.required, Validators.pattern('[0-9]*')]]
    })
  }
  get formcontrolStudent(){
    return this.formedit.controls
  } 
  ngOnInit(): void {
    this.getallStudent()
  }

  getallStudent() {
    this.callapi.getDataStudent().subscribe(data => {
      this.dataStudent = data;
      console.log(data);
    })
  }
  deleteDataStudent(id: String) {
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.callapi.deleteDataStudent(id).subscribe(i => {
          this.getallStudent()
        });
        Swal.fire(
          'Deleted!',
          'success'
        )
      }
    })
  }

  getIdStudent(studentID: String) {
    this.callapi.getDataStudentById(studentID).subscribe(it => {
      this.dataEdit = it;
    })

  }
  submiteditDataStudent() {
    this.submitEdit = true
    this.formedit.value.studentID = this.dataEdit.studentId
   if(this.formedit.valid){
    this.callapi.editDataStudent(this.formedit.value).subscribe(i => {
      Swal.fire(
        { title: 'Edit success',
          position: 'center',
          icon: 'success',
          timer: 1000,
          showConfirmButton: false
        }
      )
      this.getallStudent()
    })

   }
  }

}
