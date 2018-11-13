import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'
import { MyserviceService } from '../shared/myservice.service';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  
  course: any;

  constructor(private router:Router, private route: ActivatedRoute, private myservice:MyserviceService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
 
      let x = params.get('id');
      console.log(params['params']);
      
      
      this.course = this.myservice.findCourse(params.get('id'));
    })

  }

  edit(){
    this.router.navigate(['/editCourse',this.course['id']])
  }

}
