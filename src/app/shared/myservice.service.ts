import { Injectable } from '@angular/core';
import { COURSES, findCourseById, update } from './db-data';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  getValue(){
    return "pippo";
  }

  getCourses(){
    return COURSES;
  }

  findCourse(id){
    return findCourseById(id)
  }

  updateCourse(course){
    console.log(course);
    
    update(course);
  }
}
