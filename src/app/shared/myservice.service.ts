import { Injectable } from '@angular/core';
import { COURSES, findCourseById, update } from './db-data';

import {HttpClient} from '@angular/common/http'
import { tap, map } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }

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

  getUsers(query){

    if (query == '')
     return from([])

    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
      map(result => result.filter(user => user.name.startsWith(query)),
      )
    )

  }
}
