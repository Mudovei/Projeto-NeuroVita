import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../adm-sidebar/adm-sidebar';

interface Profissional {
  id: number;
  nome: string;
  especialidade: string;
  email: string;
  telefone: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  selector: 'app-adm-profissional',
  styleUrl: './adm-profissional.css',
  templateUrl: './adm-profissional.html',
})
export class AdmProfissional {
  busca = '';

  // Dados de exemplo (depois virão do back-end)
  profissionais: Profissional[] = [
    { id: '00123', nome: 'Camila Almeida', idade: 29, nascimento: '12/04/1997', telefone: '(61) 99842-7316', registro: 'CRM 06/123456', ativo: true },
    { id: '00123', nome: 'Juliana Ribeiro', idade: 34, nascimento: '27/08/1992', telefone: '(61) 99167-4058', registro: 'CRP 06/123456', ativo: true },
    { id: '00123', nome: 'Renata Barbosa', idade: 41, nascimento: '05/02/1985', telefone: '(61) 98654-2197', registro: 'CRP 06/123456', ativo: true },
    { id: '00123', nome: 'Larissa Mendes', idade: 26, nascimento: '19/06/2000', telefone: '(61) 99431-8625', registro: 'CRM 06/123456', ativo: false },
    { id: '00123', nome: 'Marcos Ferreira', idade: 38, nascimento: '11/11/1987', telefone: '(61) 98376-5402', registro: 'CRP 06/123456', ativo: true },
    { id: '00123', nome: 'Patrícia Oliveira', idade: 45, nascimento: '23/03/1981', telefone: '(61) 99715-3849', registro: 'CRP 06/123456', ativo: true },
    { id: '00123', nome: 'André Carvalho', idade: 32, nascimento: '30/01/1994', telefone: '(61) 98193-6274', registro: 'CRP 06/123456', ativo: false },
  ];

  // Cards: contam pelo tipo de registro
  get totalPsicologos(): number {
    return this.profissionais.filter((p) => p.registro.startsWith('CRP')).length;
  }
  get totalPsiquiatras(): number {
    return this.profissionais.filter((p) => p.registro.startsWith('CRM')).length;
  }

  // Lista filtrada pela busca (nome ou registro)
  get profissionaisFiltrados(): Profissional[] {
    const termo = this.busca.trim().toLowerCase();
    if (!termo) return this.profissionais;
    return this.profissionais.filter(
      (p) =>
        p.nome.toLowerCase().includes(termo) ||
        p.registro.toLowerCase().includes(termo)
    );
  }

  novoProfissional(): void {
    console.log('Ir para a tela Cadastrar Novo Profissional');
    // Depois: this.router.navigate(['/profissionais/novo']);
  }

  editar(p: Profissional): void {
    console.log('Editar', p.nome);
  }

  excluir(p: Profissional): void {
    if (confirm(`Deseja excluir ${p.nome}?`)) {
      this.profissionais = this.profissionais.filter((x) => x !== p);
    }
  }
}
