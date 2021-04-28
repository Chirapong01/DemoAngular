import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { OutputComponent } from './output/output.component';
import { HttpClientModule } from '@angular/common/http';
import { TeacherComponent } from './teacher/teacher.component';
import { ClassroomsComponent } from './classrooms/classrooms.component'

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    TeacherComponent,
    ClassroomsComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
