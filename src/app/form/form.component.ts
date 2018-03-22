import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder,private service:FormserviceService) { 
    this.buildForm();
  }
  MOBILE = '^[6-9][0-9]{9}$';
  nameForm: FormGroup;
  ngOnInit() {
  }
  buildForm() {
    this.nameForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      username: ['',Validators.required],
      password: ['',[Validators.required,Validators.minLength(8)]],
      mobile: ['',[Validators.required,Validators.pattern(this.MOBILE)]],
      country: ['India',Validators.required],
    });
  }
  FormSubmit(data){
    this.service.getCompoenntdata(data);
  }
  FormReset(){
    this.nameForm.reset();
  }
}
