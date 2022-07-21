import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CourseResponseModel } from '../models/course-response.model';
import { Course } from '../models/course.response';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor() { 
    
  }
  
//get(): Observable<Course[]> {
get(): Observable<CourseResponseModel[]> {
  return of(
    [
      { photo      : 'https://cdn-bjcjl.nitrocdn.com/HQYXfZvlijlYvwqzOZEqIWtqVqwJebrr/assets/static/optimized/rev-5d5c29a/wp-content/uploads/2017/04/crear-una-pagina-web-para-vender-2-1024x728-1.jpg',
      video      : 'https://www.youtube.com/embed/3LjGAPqRID8',
      title      : 'Desarrollo Web',
      description: 'Aprenderas cómo diseñar y programar un Sitio Web profesional, actual, moderno y absolutamente desde cero. El programa incluye Responsive Design para adaptar la página a dispositivos móviles y tablets, librerías para aprender a hacer animaciones y SEO para aumentar el posicionamiento en los buscadores de Google',
      category   : 'Programación',
      preview    : 'Este es un curso para todos los niveles, si nunca escribiste código o ya tienes un poco de experiencia no dudes en tomar el curso',
    
  },
  { photo      : 'https://cdn.domestika.org/c_fill,dpr_auto,f_auto,pg_1,t_base_params/v1617007189/course-covers/000/001/334/1334-original.jpg?1617007189',
      video      : 'https://www.youtube.com/embed/3LjGAPqRID8',
      title      : 'Adobe Ilustrator',
      description: 'En este curso de illustrator aprenderás acerca de la creación y edición de imágenes vectoriales utilizando este software de Adobe. Es fácil de aprender y solo se requiere tener conocimientos elementales.',
      category   : 'Diseño',
      preview    : 'En este curso aprenderás acerca de la interfaz y las herramientas que facilitan la creación de ilustraciones dinámicas y de alto impacto. ',
    
  },
  { photo      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVTAitj5Ra5M2ou9VMytjJozPEjWak0bz6xo7TzkYz6Xs8QvXmdk8NgM4O9WqFHWXmzo&usqp=CAU',
  video      : 'https://www.youtube.com/embed/3LjGAPqRID8',
  title      : 'Cómo vender tu web',
  description: 'En este curso de marketing digital aprenderás aplicar una serie de estrategias orientadas a la comercialización de una marca, por medio del uso de las redes sociales y el Internet. Es fácil de aprender y solo se requiere tener conocimientos elementales. ',
  category   : 'Marketing',
  preview    : 'En este curso aprenderás cómo formular un plan estrátegico, para la comercialización táctica de una marca, producto o servicio. ',

},
    ]
  )
}
  /* course: any;
  getCourse() {
    return this.course;
  } */
  
  

  /* getCourse()
    {
      return this._course.asObservable();
    } */

  /* public datos: Course [] = [
    { photo      : '',
      video      : 'https://www.youtube.com/embed/3LjGAPqRID8',
      title      : 'Desarrollo Web',
      description: 'Aprenderas cómo diseñar y programar un Sitio Web profesional, actual, moderno y absolutamente desde cero. El programa incluye Responsive Design para adaptar la página a dispositivos móviles y tablets, librerías para aprender a hacer animaciones y SEO para aumentar el posicionamiento en los buscadores de Google',
      category   : 'Programación',
      preview    : 'Este es un curso para todos los niveles, si nunca escribiste código o ya tienes un poco de experiencia no dudes en tomar el curso',
    
  },
  { photo      : '',
      video      : 'https://www.youtube.com/embed/3LjGAPqRID8',
      id         : '694e4e5f-f25f-470b-bd0e-26b1d4f64028',
      title      : 'Adobe Ilustrator',
      description: 'En este curso de illustrator aprenderás acerca de la creación y edición de imágenes vectoriales utilizando este software de Adobe. Es fácil de aprender y solo se requiere tener conocimientos elementales.',
      category   : 'Diseño',
      preview    : 'En este curso aprenderás acerca de la interfaz y las herramientas que facilitan la creación de ilustraciones dinámicas y de alto impacto. ',
    
  },
  { photo      : '',
  video      : 'https://www.youtube.com/embed/3LjGAPqRID8',
  id         : '694e4e5f-f25f-470b-bd0e-26b1d4f64028',
  title      : 'Cómo vender tu web',
  description: 'En este curso de marketing digital aprenderás aplicar una serie de estrategias orientadas a la comercialización de una marca, por medio del uso de las redes sociales y el Internet. Es fácil de aprender y solo se requiere tener conocimientos elementales. ',
  category   : 'Marketing',
  preview    : 'En este curso aprenderás cómo formular un plan estrátegico, para la comercialización táctica de una marca, producto o servicio. ',

},

  ]

  constructor() { 
    
  } */
}
