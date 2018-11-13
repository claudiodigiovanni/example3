import { Component, OnInit } from '@angular/core';
import { MyBehaviourSubject } from '../shared/myBehaviourSubject';

@Component({
  selector: 'app-my1',
  templateUrl: './my1.component.html',
  styleUrls: ['./my1.component.css']
})
export class My1Component implements OnInit {

  myvalue:"default"

  constructor(private mybs:MyBehaviourSubject) { }

  ngOnInit() {
    this.mybs.state.subscribe(value => this.myvalue= value)
  }

  save(){
    this.mybs.setState(this.myvalue)
  }

}
