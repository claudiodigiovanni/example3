import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MyserviceService } from '../shared/myservice.service';


@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  @Output()
  notify:any=new EventEmitter()

  @Input()
  passedString:any = {name:"", surname:""}


  constructor(private ssss: MyserviceService) { }

  ngOnInit() {
  }

  function2(){
    console.log('libro   click function2...');
    this.notify.emit('valore passato da child....')
    console.log(this.ssss.getValue());
    
    
  }

}
