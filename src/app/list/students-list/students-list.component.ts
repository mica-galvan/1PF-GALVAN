import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
 
  students=[
    {nombre: 'Marcelo Pepe'},
    {nombre: 'Laura Oliva'},
    {nombre: 'Gimena Foz'},
    {nombre: 'Nadia Perez'},
    {nombre: 'Federico Gonzalez'},
    {nombre: 'Mario Lopez'},
  ]
  status: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }
  
}
