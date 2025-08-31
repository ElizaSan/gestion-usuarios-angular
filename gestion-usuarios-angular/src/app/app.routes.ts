import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Documentacion } from './pages/documentacion/documentacion';
import { Estructuras } from './pages/estructuras/estructuras';
import { Perfil } from './pages/perfil/perfil';
import { Usuarios } from './pages/usuarios/usuarios';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'documentacion',
    component: Documentacion
  },
  {
    path: 'estructuras',
    component: Estructuras
  },
  {
    path: 'perfil',
    component: Perfil
  },
  {
    path: 'usuarios',
    component: Usuarios
  }

];
