import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmPaciente } from './adm-paciente';

describe('AdmPaciente', () => {
  let component: AdmPaciente;
  let fixture: ComponentFixture<AdmPaciente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmPaciente],
    }).compileComponents();

    fixture = TestBed.createComponent(AdmPaciente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
