import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from 'src/app/servicios/profesores.service';
import { ProfesorModel } from 'src/app/models/profesor';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  profesores!: ProfesorModel[];//
//private profesoress: Subscription | any;
 
  
  constructor(private profesoresService: ProfesoresService){}
  
   
    ngOnInit(): void {
      this.profesoresService.get().subscribe((profesores) => {
        this.profesores = profesores.map(profesor => ({
          name: profesor.name,
          category: profesor.category,
          
        }))
      })
    }
  
  
  }
  

  