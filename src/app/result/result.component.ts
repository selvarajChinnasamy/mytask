import { Component } from '@angular/core';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  public Userdata;
  constructor(private service:FormserviceService) {
    this.service.getMessage().subscribe(responce=>{
      this.Userdata = responce;
    });
   }
}
