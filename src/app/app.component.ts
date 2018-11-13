import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './shared/myservice.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular3';

  courses:any[];

  selectecCourse:any;

  ngOnInit(){

    this.courses = this.myservice.getCourses();
  }

  constructor(private myservice: MyserviceService, private router:Router){}

  onSelectedCourse(course){
    //this.selectecCourse = course
    this.router.navigate(['detailCourse', course['id']])

  }
  
}
