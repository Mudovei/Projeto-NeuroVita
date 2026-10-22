import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-adm-cadastro-profissional',
  styleUrl: './adm-cadastro-profissional.css',
  templateUrl: './adm-cadastro-profissional.html',
})
export class AdmCadastroProfissional {
  private fb = inject(FormBuilder);

  diasSemana = [
    { key: 'seg', label: 'Seg' },
    { key: 'ter', label: 'Ter' },
    { key: 'qua', label: 'Qua' },
    { key: 'qui', label: 'Qui' },
    { key: 'sex', label: 'Sex' },
    { key: 'sab', label: 'Sab' },
  ];

  categorias = ['Psicólogo', 'Psiquiatra', 'Terapeuta Ocupacional', 'Fonoaudiólogo'];

  form = this.fb.group({
    nome: ['', Validators.required],
    dataNascimento: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    cpf: ['', Validators.required],
    telefone: ['', Validators.required],

    categoria: ['', Validators.required],
    numeroRegistro: ['', Validators.required],
    anoConclusao: ['', Validators.required],

    // um checkbox para cada dia da semana
    dias: this.fb.group({
      seg: [false], ter: [false], qua: [false],
      qui: [false], sex: [false], sab: [false],
    }),
    horaInicio: ['08:00'],
    horaFim: ['18:00'],
    horarios: this.fb.array([
      this.fb.control('08:00 - 11:00'),
      this.fb.control('13:00 - 18:00'),
    ]),
    atendeOnline: [false],
    atendePresencial: [false],

    status: ['ativo'],

    emailAcesso: ['', [Validators.required, Validators.email]],
    senhaTemporaria: [''],
    enviarBoasVindas: [false],
  });

  get horarios() {
    return this.form.get('horarios') as FormArray;
  }

  adicionarHorario() {
    const { horaInicio, horaFim } = this.form.value;
    if (horaInicio && horaFim) {
      this.horarios.push(this.fb.control(`${horaInicio} - ${horaFim}`));
    }
  }

  removerHorario(i: number) {
    this.horarios.removeAt(i);
  }

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
    console.log(this.form.value); 
  }

  cancelar() {
    this.form.reset({ status: 'ativo', horaInicio: '08:00', horaFim: '18:00' });
  }
}

