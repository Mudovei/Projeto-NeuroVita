import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  mostrarSenha: boolean = false;

  constructor(private router: Router) {}

  entrar(event: Event) {
    event.preventDefault();
  }
}
