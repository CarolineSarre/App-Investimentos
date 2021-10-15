import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map} from 'jquery';
import { InvestimentosService } from '../investimentos/investimentos.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnChanges {

  @Input() textoBuscafiltro ;
  @Output() busca = new EventEmitter<any>();
  @Output() textoBuscado!: string;
  listaDeFundos!: any;

  constructor( private investimentosService: InvestimentosService) { }

  ngOnInit(): void {
    this.buscaLista();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  sendToParent(value: any){
    this.busca.emit(this.textoBuscado);
    console.log(this.textoBuscado);
  }
  
  buscaLista(){
    this.investimentosService.getInvestimentos().subscribe(value => this.listaDeFundos = value);
    
    
  }
  filtraLista(){
    const listaFiltrada = this.listaDeFundos.filter((item)=>{
      return item.simple_name;
      
    })
    this.listaDeFundos = listaFiltrada;
    console.log(listaFiltrada)
  }

}

