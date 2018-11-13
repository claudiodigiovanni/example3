import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { My1Component } from './my1/my1.component';
import { My2Component } from './my2/my2.component';


const routes: Routes = [
  {path:"", component: ListCoursesComponent},
  {path:"detailCourse", component: CourseDetailComponent},
  {path:"editCourse/:id", component: EditCourseComponent},
  {path:"my1", component:My1Component},
  {path:"my2", component:My2Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
