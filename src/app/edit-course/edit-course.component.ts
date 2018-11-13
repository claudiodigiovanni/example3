import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../shared/myservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  myform:FormGroup;

  course:any;

  constructor(private router:Router, private route:ActivatedRoute, private myservice:MyserviceService, private fb:FormBuilder) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.course = this.myservice.findCourse(params.get('id'))
    })

     this.myform = this.fb.group({
      id: this.course.id,
      description:[this.course.description, [Validators.required, Validators.minLength(4)]],
      category:this.course.category
    }) 
  }

   /* save(){
    this.myservice.updateCourse(this.course)
    this.router.navigate(['/'])
  }  */

   save(){
    console.log(this.myform.value);
    
    this.myservice.updateCourse(this.myform.value)
    this.router.navigate(['/'])
  } 


}
