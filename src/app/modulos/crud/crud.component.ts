import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumno } from '../../models/alumno';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  

  @Input() abmForm: FormGroup = new FormGroup({
    default: new FormControl(),});

   AlumnoList: Alumno[] = 
    [
      { id: 1, name:'Tamara Aguirre', course:'DW' }, 
      { id: 2, name:'Yanina Torres', course:'AI' },
      { id: 3, name:'Sofia Alan', course:'VW' }
    ]
  

  alumnoSelected: Alumno = new Alumno();

  addOrEdit(){

    if(this.alumnoSelected.id === 0){
      this.alumnoSelected.id = this.AlumnoList.length + 1;
      this.AlumnoList.push(this.alumnoSelected)
    }
    this.alumnoSelected = new Alumno();
  }

  Edit(alumno: Alumno){
    this.alumnoSelected = alumno
  }

  delete(){
    this.AlumnoList = this.AlumnoList.filter( x => x != this.alumnoSelected);
    this.alumnoSelected = new Alumno();

  }

  constructor(
    private _formBuilder: FormBuilder,
  ){
}

  ngOnInit(): void {
    this.abmForm = this._formBuilder.group({
     
      name: ['', [Validators.required, Validators.minLength(3)]],
      course  : ['',[Validators.required, Validators.minLength(2)]],

      
     });
  }

}
