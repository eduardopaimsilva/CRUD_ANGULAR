import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-painel-agenda',
  templateUrl: './painel-agenda.component.html',
  styleUrls: ['./painel-agenda.component.css']
})
export class PainelAgendaComponent implements OnInit {
  
  agenda = [ 
    {id:1, nome: 'thiago', telefone:'19 99999-6787'}
  ];
  constructor(private service: AgendaService) { }

  ngOnInit(): void {
    this.buscar();
  }
  buscar(){
    this.service.
    listar().
    subscribe(resposta => this.agenda = <any>resposta);
  }

}
