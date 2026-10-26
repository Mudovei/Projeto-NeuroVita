import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmSidebar } from './adm-sidebar';

describe('AdmSidebar', () => {
  let component: AdmSidebar;
  let fixture: ComponentFixture<AdmSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(AdmSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
