import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  now = new Date();
  user = "";
  
  //cursos
  cursos = [
    { id: 1, nombre: "clase 1", codigo: "codigo_01", seccion: "0001V" },
    { id: 2, nombre: "clase 2", codigo: "codigo_02", seccion: "0002V" },
    { id: 3, nombre: "clase 3", codigo: "codigo_03", seccion: "0003V" },
  ];

  constructor(private activeroute: ActivatedRoute, private router: Router) {
  

      this.activeroute.queryParams.subscribe(params => {       
    
        this.user = this.router.getCurrentNavigation()?.extras.state?.['id'];
    
        console.log(this.router.getCurrentNavigation()?.extras.state?.['user']);
    
       
    
      });
    
    
  }

  verDetalle(nombre:string,id: number, codigo:string, seccion:string) {
    let setData:NavigationExtras = {
      state: {
        nombre:nombre,
        id:id,
        codigo:codigo,
        seccion:seccion
      }
    };

    this.router.navigate(['/detalle-curso'],setData);
  }
}
