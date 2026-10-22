import { Routes } from '@angular/router';
import { Login } from './login/login';
import { EsqueciSenha } from './esqueci-senha/esqueci-senha';
import { AdmCadastroProfissional } from './adm-cadastro-profissional/adm-cadastro-profissional';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'profissionais/novo', component: AdmCadastroProfissional },
  { path: 'login', component: Login },
  { path: 'esqueci-senha', component: EsqueciSenha },

];
