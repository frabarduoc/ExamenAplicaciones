import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  // Importar Router
import { ConsumoapiService } from '../service/consumo-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user: string = '';  // Inicializamos como cadena vacía para evitar posibles errores
  cursos : any [] = [];

  constructor(private consumoapi: ConsumoapiService, private route: ActivatedRoute, private router: Router) {}  // Añadimos Router

  //metodo para consumir el servicio de la API
  getPostServices() {
    this.consumoapi.obtenerCursosPorProfesor(1).subscribe((respuesta) => {
      this.cursos = respuesta;
      console.log('Cursos cargados:', this.cursos); // Para debugging
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user = params['user'] || 'Profesor';  // Verifica que esté recibiendo el parámetro correctamente
    });
    this.getPostServices();
  }

  verDetalle(nombre: string, id: number, codigo: string, seccion: string) {
    // Redirigir a la página 'detalle-curso' pasando los parámetros
    this.router.navigate(['/detalle-curso'], {
      queryParams: { nombre, id, codigo, seccion }
    });
  }
}
