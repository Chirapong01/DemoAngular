import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CallapiService } from '../service/callapi.service';
import Swal from'sweetalert2'
@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.css']
})
export class ClassroomsComponent implements OnInit {
  dataAllClassrooms:any
  formedit:any
  constructor(public callapi:CallapiService,public formbuilder:FormBuilder) {
    this.formedit = this.formbuilder.group({
      studentId: null,
      studentName: [null, Validators.required],
      studentTel: [null, Validators.required],
      studentAge: [null, Validators.required]
    })
   }

  ngOnInit(): void {
    this.getAllDataClassrooms()
  }

  getAllDataClassrooms(){
    this.callapi.getDataClassrooms().subscribe(i=>{
      this.dataAllClassrooms = i

    })
  }
  deleteClassrooms(id:string){
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
