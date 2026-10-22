import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-adm-cadastro-secretaria',
  styleUrl: './adm-cadastro-secretaria.css',
  templateUrl: './adm-cadastro-secretaria.html',
})
export class AdmCadastroSecretaria {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    nome: ['', Validators.required],
    dataNascimento: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    cpf: ['', Validators.required],
    telefone: ['', Validators.required],
    endereco: ['', Validators.required],

    cargo: [{ value: 'Secretária', disabled: true }],
    dataAdmissao: ['', Validators.required],

    emailAcesso: ['', [Validators.required, Validators.email]],
    senhaTemporaria: [''],
    enviarBoasVindas: [false],
  });

  gerarSenha() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$';
    let senha = '';
    for (let i = 0; i < 10; i++) {
      senha += chars[Math.floor(Math.random() * chars.length)];
    }
    this.form.patchValue({ senhaTemporaria: senha });
  }

  cadastrar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // getRawValue() inclui o campo "cargo", que está desabilitado
    console.log(this.form.getRawValue());
  }

  cancelar() {
    this.form.reset({ cargo: 'Secretária', enviarBoasVindas: false });
  }
}

