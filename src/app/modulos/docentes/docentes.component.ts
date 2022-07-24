import { Component, OnInit } from '@angular/core';
import { DocenteService } from 'src/app/servicios/docentes.service';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {

  //public fecha: Date;

  constructor(
    public pOS: DocenteService
  ) { }

  ngOnInit(): void {
    //this.pOS.getDocenteP().then(response => response.json()).then(response => console.log(response));
    //this.pOS.getDocenteO().subscribe(response => console.log(response));
    // this.pOS.ejemploObservable().subscribe({
    //   next: (fecha: Date) => console.log(fecha),
    //   error: (error) => console.log(error),
    //   complete: () => console.log('Acabó')
    // });
  }
}