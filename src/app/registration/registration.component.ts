import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginserviceService } from '../Services/login/loginservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registor:LoginserviceService) { }

  ngOnInit(): void {
  }

  regUser(form:NgForm){
    console.log(form.value)
    this.registor.register(form.value).subscribe((res)=>{
      console.log(res)
    
    })
  }

}
