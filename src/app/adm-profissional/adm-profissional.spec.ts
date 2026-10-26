import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmProfissional } from './adm-profissional';

describe('AdmProfissional', () => {
  let component: AdmProfissional;
  let fixture: ComponentFixture<AdmProfissional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmProfissional],
    }).compileComponents();

    fixture = TestBed.createComponent(AdmProfissional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
