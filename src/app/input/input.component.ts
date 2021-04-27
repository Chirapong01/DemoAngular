
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

  submit: boolean = false;
  forminput: any;
  constructor(public formbuilder: FormBuilder, public callapi: CallapiService) {

    this.forminput = this.formbuilder.group({
      studentID:[null],
      studentName: [null, Validators.required],
      studentTel: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      studentAge: [null, [Validators.required, Validators.pattern('[0-9]*')]]
    })
  }
  get formcontrol() {
    return this.forminput.controls;
  }
  onsubmit() {
    this.submit = true;

    if (this.forminput.valid) {
     
      this.callapi.addDataStudent(this.forminput.value).subscribe(it =>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(this.forminput.value);
      })
    }
  }
  ngOnInit(): void {
  }
}
