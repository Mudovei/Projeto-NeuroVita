import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmCadastroSecretaria } from './adm-cadastro-secretaria';

describe('AdmCadastroSecretaria', () => {
  let component: AdmCadastroSecretaria;
  let fixture: ComponentFixture<AdmCadastroSecretaria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmCadastroSecretaria],
    }).compileComponents();

    fixture = TestBed.createComponent(AdmCadastroSecretaria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
