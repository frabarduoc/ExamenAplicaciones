import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { guardGuard } from './guard/guard.guard'; // Si tienes un guard, asegúrate de que esté correctamente configurado.

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full' // Redirige a la página de login por defecto
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'portaldocente',
    loadChildren: () => import('./portaldocente/portaldocente.module').then(m => m.PortaldocentePageModule)
  },
  {
    path: 'portalalumno',
    loadChildren: () => import('./portalalumno/portalalumno.module').then(m => m.PortalalumnoPageModule)
  },
  {
    path: 'recuperarcontrasena',
    loadChildren: () => import('./recuperarcontrasena/recuperarcontrasena.module').then(m => m.RecuperarcontrasenaPageModule)
  },
  {
    path: 'detalle-curso',
    loadChildren: () => import('./detalle-curso/detalle-curso.module').then(m => m.DetalleCursoPageModule)
  },
  {
    path: '**',  // Cualquier otra ruta no definida lleva a la página 404
    loadChildren: () => import('./page404/page404.module').then(m => m.Page404PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) // Carga las rutas de forma optimizada
  ],
  exports: [RouterModule] // Exporta RouterModule para que esté disponible en toda la aplicación
})
export class AppRoutingModule { }
