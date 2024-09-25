import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import {Router, NavigationExtras} from '@angular/router' ;
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private activeroute: ActivatedRoute, private router: Router, private alertController: AlertController) { }
  
  usuario = new FormGroup({
    user: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),  
    pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),  
   });

  navegarExtras(){
    let setData: NavigationExtras = {  
     state: {  
      id: this.usuario.value.user,  
      user: this.usuario.value.pass  
     }  
    }; 
  
      this.router.navigate(['/home'],setData);
  
      const loginMap: { [key :string]: string} = {
        'prof:1234': '/home',
        'estu:1234': '/home-estudiante'
      };

      const userPassKey =  `${this.usuario.value.user}:${this.usuario.value.pass}`;
      
      if (loginMap[userPassKey]) {
        this.router.navigate([loginMap[userPassKey]], setData);
      } else {
        this.presentAlert("Error Login", "Usuario o contraseña incorrectos");
      }
  }
  async presentAlert(titulo:string, mensaje:string){
    const alert = await this.alertController.create({
      header: 'Info Login',
      subHeader: titulo,
      message: mensaje,
      buttons: ['Action'],
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
