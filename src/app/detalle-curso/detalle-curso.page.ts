import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import {Router, NavigationExtras} from '@angular/router' ;
@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.page.html',
  styleUrls: ['./detalle-curso.page.scss'],
})
export class DetalleCursoPage implements OnInit {

  idCurso = ""
  nombreCurso =""

  alumnos = [
    {rut:"11111111-1", nombre: "Alumno Uno", estado:"Ausente"},
    {rut:"22222222-2", nombre: "Alumna Dos", estado:"presente"},
    {rut:"33333333-3", nombre: "Alumn Tres", estado:"presente"},
    {rut:"44444444-4", nombre: "Alumna Cuatro", estado:"presente"},
    {rut:"55555555-5", nombre: "Alumno Cinco", estado:"Ausente"},
    {rut:"66666666-6", nombre: "Alumna Seis", estado:"presente"},

  ];


  


  constructor(private activeroute: ActivatedRoute, private router: Router) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {  
        console.log(this.router.getCurrentNavigation()?.extras.state?.['nombre']);
        console.log(this.router.getCurrentNavigation()?.extras.state?.['id']);   
        console.log(this.router.getCurrentNavigation()?.extras.state?.['codigo']);
        console.log(this.router.getCurrentNavigation()?.extras.state?.['seccion']);     
      }
    });
   }

  ngOnInit() {
  }

}
