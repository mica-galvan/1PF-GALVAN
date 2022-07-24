import { Component, OnInit, OnDestroy } from '@angular/core';
import { map, Subscription, tap } from 'rxjs';
import { DocenteService } from 'src/app/servicios/docentes.service';
import { Docente } from 'src/app/models/docente';

@Component({
  selector: 'app-tutores',
  templateUrl: './tutores.component.html',
  styleUrls: ['./tutores.component.css']
})
export class TutoresComponent implements OnInit, OnDestroy {
  public tutores: Docente[] | any;
  private suscripcion: Subscription | any;

  constructor(
    private pOS: DocenteService
  ) { }

  ngOnInit(): void {
    //this.pOS.getDocenteP().then(response => response.json()).then(response => console.log(response));
    
    //this.pOS.getDocenteO().subscribe(response => console.log(response));
    
    // this.pOS.ejemploObservable().subscribe({
    //   next: (fecha: Date) => console.log(fecha),
    //   error: (error) => console.log(error),
    //   complete: () => console.log('Acabó')
    // });

    this.suscripcion = this.pOS.docentes$.pipe(
      tap(docentes => console.log(docentes)),
      map(docentes => { return docentes.filter(docente => docente.hair_color == 'n/a')}),
      tap(docentes => console.log(docentes))
    )
    .subscribe(response => { this.tutores = response; });
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
}