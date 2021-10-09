import { Component, OnInit } from '@angular/core';
import { InvestimentosService } from './investimentos.service'

@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.component.html',
  styleUrls: ['./investimentos.component.css']
})
export class InvestimentosComponent implements OnInit {
  listaDeInvestimentos: any[] = [];
  listinha!: any;
  

  constructor( 
    public investimentoService: InvestimentosService
  ) { }

  ngOnInit(): void {
    this.listarInvestimentos();
    console.log("OnInit", this.listaDeInvestimentos)
   }

  listarInvestimentos(){
   this.investimentoService.getInvestimentos().subscribe(value => this.listaDeInvestimentos = value);
   console.log("OnInit", this.listaDeInvestimentos)
  }
  

}
