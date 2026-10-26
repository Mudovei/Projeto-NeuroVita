import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-adm-sidebar',
  styleUrl: './adm-sidebar.css',
  templateUrl: './adm-sidebar.html',
})
export class AdmSidebar {
  @Input() ativo = 'Início';

  menu = [
    { icone: '🏠', nome: 'Início' },
    { icone: '👥', nome: 'Pacientes' },
    { icone: '👥', nome: 'Profissionais' },
    { icone: '👥', nome: 'Secretária' },
    { icone: '📅', nome: 'Agenda' },
  ];
}
