import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private navCtrl: NavController) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    const { username, password } = this.loginForm.value;

    if (username === 'profesor' && password === 'profesor') {
      this.navCtrl.navigateForward('/home', {
        queryParams: { user: 'Profesor Don' }
      });
    } else if (username === 'alumno' && password === 'alumno') {
      // Cambié '/alumno-dashboard' a '/portalalumno' para redirigir correctamente
      this.navCtrl.navigateForward('/portalalumno');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}

