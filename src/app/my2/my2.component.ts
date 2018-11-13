import { Component, OnInit } from '@angular/core';
import { MyBehaviourSubject } from '../shared/myBehaviourSubject';

@Component({
  selector: 'app-my2',
  templateUrl: './my2.component.html',
  styleUrls: ['./my2.component.css']
})
export class My2Component implements OnInit {

  myvalue:"default"

  constructor(private mybs:MyBehaviourSubject) { }

  ngOnInit() {
    this.mybs.state.subscribe(value => this.myvalue= value)
  }

  save(){
    this.mybs.setState(this.myvalue)
  }

}
