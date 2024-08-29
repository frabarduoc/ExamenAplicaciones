import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortalalumnoPage } from './portalalumno.page';

describe('PortalalumnoPage', () => {
  let component: PortalalumnoPage;
  let fixture: ComponentFixture<PortalalumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
