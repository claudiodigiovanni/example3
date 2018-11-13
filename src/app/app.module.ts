import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import { AutoreComponent } from './autore/autore.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { UiModule } from './ui/ui.module';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { My1Component } from './my1/my1.component';
import { My2Component } from './my2/my2.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    AutoreComponent,
    ListCoursesComponent,
    CourseDetailComponent,
    EditCourseComponent,
    My1Component,
    My2Component
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
