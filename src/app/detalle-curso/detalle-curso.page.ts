import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ConsumoapiService } from '../service/consumo-api.service';
import { AlertController } from '@ionic/angular';
//import QRCode from 'qrcode'; // Importa la biblioteca QRCode, NO FUNCIONA


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
  //qrDataURL:string = ''; // NO FUNCIONA QR
  

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
    //this.generateQRCode(); // NO FUNCIONA
  }

  mostrarAlumno(){
    this.consumoapi.obtenerAlumnosPorCursoPorProfesor(1,this.id).subscribe((respuesta) => {
      this.alumnos = respuesta;
      console.log('Almnos cargados:', this.alumnos); // Para debugging
    }, (error) => {
      console.error('Error al cargar alumnos:', error); // Manejo de errores
    });
  }


  /*generateQRCode(){
    if (this.id) {
      const fechaActual = new Date().toISOString().split('T')[0];
      const data = `${this.codigo}-${this.seccion}-${fechaActual}`;

      let qr = QRCode(4, 'L');
      qr.addData(data);
      qr.make();
      this.qrDataURL= qr.createDataURL(4);
    }
  }*/ //FUNCION PARA GENERAR QR NO FUNCIONA 
 
  
}
