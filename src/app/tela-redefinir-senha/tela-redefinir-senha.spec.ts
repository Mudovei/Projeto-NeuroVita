import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaRedefinirSenha } from './tela-redefinir-senha';

describe('TelaRedefinirSenha', () => {
  let component: TelaRedefinirSenha;
  let fixture: ComponentFixture<TelaRedefinirSenha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaRedefinirSenha],
    }).compileComponents();

    fixture = TestBed.createComponent(TelaRedefinirSenha);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
