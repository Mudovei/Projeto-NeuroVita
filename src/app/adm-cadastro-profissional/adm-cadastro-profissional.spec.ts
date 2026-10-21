import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmCadastroProfissional } from './adm-cadastro-profissional';

describe('AdmCadastroProfissional', () => {
  let component: AdmCadastroProfissional;
  let fixture: ComponentFixture<AdmCadastroProfissional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmCadastroProfissional],
    }).compileComponents();

    fixture = TestBed.createComponent(AdmCadastroProfissional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
