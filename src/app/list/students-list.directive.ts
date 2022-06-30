import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStudentsList]'
})
export class StudentsListDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ){
    renderer.setStyle(element.nativeElement, 'fontSize','20px')
    renderer.setStyle(element.nativeElement, 'color','fuchsia')
    renderer.setStyle(element.nativeElement, 'border','2px solid white')
  }

}
