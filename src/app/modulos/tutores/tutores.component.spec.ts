import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutoresComponent } from './tutores.component';

describe('TutoresComponent', () => {
  let component: TutoresComponent;
  let fixture: ComponentFixture<TutoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
