import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassroomsComponent } from './classrooms/classrooms.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {path:'input',component:InputComponent},
  {path:'output',component:OutputComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'classrooms',component:ClassroomsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
