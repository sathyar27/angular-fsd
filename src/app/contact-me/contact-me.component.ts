import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {contactData} from '../models/contacts';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  form: FormGroup;

  
  public FirstName: any;
  public LastName: any;
  public Email: any;

  public submitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  saveForm(value: any) { 
    console.log(value.firstname);

   this.FirstName = value.firstname;
   this.LastName = value.lastname;
   this.Email = value.email;
   
   this.submitted = true;
  }

  closeModal() {
    this.submitted = false;
  }

}
