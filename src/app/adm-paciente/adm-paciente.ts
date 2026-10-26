import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Paciente {
  id: string;
  nome: string;
  idade: number;
  nascimento: string;
  telefone: string;
  profissional: string;
  ativo: boolean;
}

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-adm-paciente',
  styleUrl: './adm-paciente.css',
  templateUrl: './adm-paciente.html',
})
export class AdmPaciente {
  busca = '';

  menu = [
    { icone: '🏠', nome: 'Início', ativo: false },
    { icone: '👥', nome: 'Pacientes', ativo: true },
    { icone: '👥', nome: 'Profissionais', ativo: false },
    { icone: '👥', nome: 'Secretária', ativo: false },
    { icone: '📅', nome: 'Agenda', ativo: false },
  ];

  // Dados de exemplo (depois virão do back-end)
  pacientes: Paciente[] = [
    { id: '00123', nome: 'Ana Clara Souza', idade: 10, nascimento: '15/03/2018', telefone: '(61) 99847-2631', profissional: 'Maria Oliveira', ativo: true },
    { id: '00123', nome: 'Lucas Henrique', idade: 14, nascimento: '22/07/2016', telefone: '(61) 99152-7846', profissional: 'Eduardo Costa', ativo: true },
    { id: '00123', nome: 'Gabriel Santos', idade: 13, nascimento: '28/05/2013', telefone: '(61) 98631-4509', profissional: 'Gustavo Lima', ativo: true },
    { id: '00123', nome: 'Mariana Vitória', idade: 15, nascimento: '03/11/2010', telefone: '(61) 99428-6173', profissional: 'Maria Oliveira', ativo: false },
    { id: '00123', nome: 'Pedro Miguel', idade: 17, nascimento: '19/02/2009', telefone: '(61) 98375-2914', profissional: 'Maria Oliveira', ativo: true },
    { id: '00123', nome: 'Beatriz Fernandes', idade: 16, nascimento: '14/06/2010', telefone: '(61) 99706-5382', profissional: 'Nathalia Valente', ativo: true },
    { id: '00123', nome: 'João Vitor Martins', idade: 17, nascimento: '30/05/2009', telefone: '(61) 98164-9275', profissional: 'Eduardo Costa', ativo: false },
  ];

  // Totais dos cards (valores do protótipo)
  totalCadastrados = 150;
  totalEmTratamento = 82;
  totalAvaliacoes = 230;

  // Lista filtrada pela busca (por nome ou profissional)
  get pacientesFiltrados(): Paciente[] {
    const termo = this.busca.trim().toLowerCase();
    if (!termo) return this.pacientes;
    return this.pacientes.filter(
      (p) =>
        p.nome.toLowerCase().includes(termo) ||
        p.profissional.toLowerCase().includes(termo)
    );
  }
}

