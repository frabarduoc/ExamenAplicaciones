import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portalalumno',
  templateUrl: './portalalumno.page.html',
  styleUrls: ['./portalalumno.page.scss'],
})
export class PortalalumnoPage {
  alumno = {
    nombre: 'Juan',
    apellido: 'Pérez',
    fechaNacimiento: '2000-01-01', // Ejemplo de fecha de nacimiento
    edad: 24, // Puedes calcular la edad actual o establecerla manualmente
    carrera: 'Ingeniería en Informática', // Agregar esta propiedad
  };


  constructor() {}

  ngOnInit() {}

  calcularEdad(fechaNacimiento: string): number {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const m = hoy.getMonth() - nacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  }
}

