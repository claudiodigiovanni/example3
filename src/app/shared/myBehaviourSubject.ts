import { Injectable } from '@angular/core';
import { COURSES, findCourseById, update } from './db-data';
import { BehaviorSubject, Observable } from 'rxjs';
import { _sanitizeStyle } from '@angular/core/src/sanitization/style_sanitizer';

@Injectable({
  providedIn: 'root'
})
export class MyBehaviourSubject {

  constructor() { }

  private _state:BehaviorSubject<any> = new BehaviorSubject<any>("");

  public state:Observable<any> = this._state.asObservable()

  public setState(newValue){
      this._state.next(newValue);
  }

}
