import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, map, Observable, take, Subject } from 'rxjs';
import { Docente } from '../models/docente';
//import { CourseResponseModel } from '../models/course-response.model';
//import { Course } from '../models/course.response';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
public docentes$: Observable<Docente[]>;
private docentes: Subject<Docente[]>;

  constructor(
    private httpClient: HttpClient
  ) {    
    this.docentes = new Subject();
    this.docentes$ = this.docentes.asObservable();
    this.httpClient.get(
      'https://swapi.dev/api/people'
    ).subscribe(respuesta => {
      this.docentes.next((respuesta as any).results);
    });
  }

  modificarDocentes(docentes: Docente[]) {
    this.docentes.next(docentes);
  }

  getDocenteO(): Observable<any> {
    return this.httpClient.get(
      'https://swapi.dev/api/people'
    ).pipe(
      map((resp: any) => (resp.results as Docente[]))
    );
  }

  getDocenteP(): Promise<Response> {
    return fetch('https://swapi.dev/api/people');
  }

  ejemploObservable(): Observable<Date> {
    return interval(2000).pipe(take(5), map(_ => new Date()));
  }
}