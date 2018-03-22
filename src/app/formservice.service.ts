import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FormserviceService {
  private subject = new Subject<any>();
  constructor() { }
  getCompoenntdata(data) {
    this.subject.next(data);
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
