import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MyserviceService } from '../shared/myservice.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

 
  courses:any[]

  
  constructor(private myservice:MyserviceService, private router:Router) {
   
   }

  ngOnInit() {
    this.courses = this.myservice.getCourses()
  }

  selectCourse(course){

    console.log(course);
    //this.router.navigate(['/detailCourse', course.id])
    this.router.navigate(['/detailCourse', {...course}])

  }

}
