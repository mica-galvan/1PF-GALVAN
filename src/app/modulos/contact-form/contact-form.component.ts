import {  Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import Swal from 'sweetalert2';
// import 'sweetalert2/src/sweetalert2.scss'


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],

})
export class ContactFormComponent implements OnInit {

 
  @Input() contactForm: FormGroup = new FormGroup({
    default: new FormControl(),});
   
  constructor(
    private _formBuilder: FormBuilder,

  ) {
  }

  ngOnInit(): void {
    this.contactForm = this._formBuilder.group({
     
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastname  : ['',[Validators.required, Validators.minLength(3)]],
       email: ['', [Validators.required, Validators.email]],
       subject: ['', [Validators.required, Validators.maxLength(300)]]
      
     });
    
   }
   guardar() {
     var contactForms = {
      nombre_alumno: this.contactForm.value.name,
     apellido_alumno: this.contactForm.value.lastname,
     email_alumno:this.contactForm.value.email,
   asunto: this.contactForm.value.subject,

     }
   

    
    console.log(contactForms);
   
  }
}
