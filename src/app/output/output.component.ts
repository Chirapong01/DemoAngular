import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';
import Swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';
import { student } from '../model/classrooms';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  formedit: any
  id:any
  dataStudent: any;
  constructor(public callapi: CallapiService, public formbuilder: FormBuilder) {
    this.formedit = this.formbuilder.group({
      studentID: null,
      studentName: [null, Validators.required],
      studentTel: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      studentAge: [null, [Validators.required, Validators.pattern('[0-9]*')]]
    })
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
  
  editDataStudent(student:String) {
    this.id = student;
    console.log(this.id);
    
  }
  submiteditDataStudent() {
    this.formedit.value.studentID = this.id
    console.log(this.formedit.value);
    this.callapi.editDataStudent(this.formedit.value).subscribe(i => {
      this.getallStudent()
    })

  }


}
