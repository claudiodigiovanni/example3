import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../shared/myservice.service';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { CourseDetailComponent } from '../course-detail/course-detail.component';
import { fromEvent, Observable } from 'rxjs';

import {debounceTime,distinctUntilChanged, switchMap, tap} from 'rxjs/operators'

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  myform:FormGroup;  

  course:any;

  users$: any;

  visibleDiv = true;

  

  constructor(private router:Router, private route:ActivatedRoute, private myservice:MyserviceService, private fb:FormBuilder) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.course = this.myservice.findCourse(params.get('id'))
      this.course = {...this.course, category:'', options:[false,false]}
    })

    this.myform = this.fb.group({
      id: this.course.id,
      description:[this.course.description, [Validators.required, Validators.minLength(4)]],
      category:this.course.category,
      options: this.fb.array([
        this.fb.control(this.course.options[0]),
        this.fb.control(this.course.options[1])

      ])
    })

  

    this.users$ =this.myform.get('category').valueChanges.pipe(
      debounceTime(300),       
      distinctUntilChanged(),  
      tap(term => this.visibleDiv = true),
      switchMap(term => this.myservice.getUsers(term))
    )

  }


  showDiv(){
    this.visibleDiv = true
  }

  optionsList = ['uno','due']

  get options1() {
    return this.myform.get('options') as FormArray;
  }

   /* save(){
    this.myservice.updateCourse(this.course)
    this.router.navigate(['/'])
  }  */

   save(){
    console.log(this.myform.value);
    
    /*this.myservice.updateCourse(this.myform.value)
    this.router.navigate(['/'])*/
  } 

  onselectClient(ClientObj) {   
    this.myform.get('category').setValue(ClientObj.name);
    this.visibleDiv = false
    
    
  }


}
