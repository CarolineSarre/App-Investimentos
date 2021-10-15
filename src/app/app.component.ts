import { Component, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as $ from 'jquery';
import 'foundation-sites';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input()  listaDeInvestimentos: any[] = [];
  @Input() textBuscaInvestimentos;
  @Input() busca = new EventEmitter<any>();
  @Input() textoBuscado!: string;
  title = 'investimentos';
  textoBusca = 'XABLAU'
  ngOnInit() {
    $(document).ready(function () {
      $(document).foundation();
      
    });
  }

 
  constructor(){}

  filtro(){  
    const listaFiltrada = this.listaDeInvestimentos.filter((item)=>{
      return item.nome.startWith(this.busca);
      
    })
    this.listaDeInvestimentos = listaFiltrada;
    
  }
  changeTextoBusca(value: any) {
    this.textoBusca = value
    console.log(this.textoBusca)
    this.filtro();
  }
}