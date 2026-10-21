import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  standalone:true,
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-tela-login',
  styleUrl: './tela-login.css',
  templateUrl: './tela-login.html',
})
export class TelaLogin {

  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  mensagem = '';
  mostrarSenha = false;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6)]],
  });

  entrar() {
    if (this.form.invalid) return;

    this.http.post<{ mensagem: string }>('http://localhost:3000/api/login', this.form.value)
      .subscribe({
        next: (res) => this.mensagem = res.mensagem,
        error: (err) => this.mensagem = err.error?.mensagem ?? 'Erro ao conectar.',
      });
      
  }  
}
