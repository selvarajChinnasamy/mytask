import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';
import { routes } from './app.router';
import { FormserviceService } from './formservice.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    routes,
    ReactiveFormsModule,
  ],
  providers: [FormserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
