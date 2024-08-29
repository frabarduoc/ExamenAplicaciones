import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortaldocentePage } from './portaldocente.page';

describe('PortaldocentePage', () => {
  let component: PortaldocentePage;
  let fixture: ComponentFixture<PortaldocentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PortaldocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
