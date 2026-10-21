import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaAdministrador } from './tela-administrador';

describe('TelaAdministrador', () => {
  let component: TelaAdministrador;
  let fixture: ComponentFixture<TelaAdministrador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaAdministrador],
    }).compileComponents();

    fixture = TestBed.createComponent(TelaAdministrador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
