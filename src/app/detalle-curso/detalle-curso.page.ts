import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ConsumoapiService } from '../service/consumo-api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.page.html',
  styleUrls: ['./detalle-curso.page.scss'],
})
export class DetalleCursoPage implements OnInit {
  nombreCurso: string = ''; // Inicializa con cadena vacía
  id: number = 0;           // Inicializa con 0
  codigo: string = '';      // Inicializa con cadena vacía
  seccion: string = '';     // Inicializa con cadena vacía
  alumnos: any [] = [];

  constructor(
    private consumoapi: ConsumoapiService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private activeroute: ActivatedRoute  
  ) {}
  

  ngOnInit() {
    this.activeroute.queryParams.subscribe(params => {
      this.nombreCurso = params['nombre'];
      this.id = +params['id'];
      this.codigo = params['codigo'];
      this.seccion = params['seccion'];
    });
    this.mostrarAlumno();
  }

  mostrarAlumno(){
    this.consumoapi.obtenerAlumnosPorCursoPorProfesor(1,this.id).subscribe((respuesta) => {
      this.alumnos = respuesta;
      console.log('Almnos cargados:', this.alumnos); // Para debugging
    }, (error) => {
      console.error('Error al cargar alumnos:', error); // Manejo de errores
    });
  }

  /*async mostrarPost(alumno: any) {
    const alert = await this.alertController.create({
      header: 'Post de ' + alumno.nombre,
      message: alumno.post ? alumno.post : 'No hay post disponible',
      buttons: ['OK']
    });

    await alert.present();
  }*/
}
