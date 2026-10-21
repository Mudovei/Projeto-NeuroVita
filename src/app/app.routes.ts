import { Routes } from '@angular/router';
import { Login } from './login/login';
import { EsqueciSenha } from './esqueci-senha/esqueci-senha';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'esqueci-senha', component: EsqueciSenha },

];
