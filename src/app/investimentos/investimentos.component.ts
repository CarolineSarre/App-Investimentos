import { Component, OnInit } from '@angular/core';
import { InvestimentosService } from './investimentos.service'

@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.component.html',
  styleUrls: ['./investimentos.component.css']
})
export class InvestimentosComponent implements OnInit {
  listaDeInvestimentos: any[] = [];
  

  constructor( 
    public investimentoService: InvestimentosService
  ) { }

  ngOnInit(): void {
    this.listarInvestimentos();
   }

  async listarInvestimentos(){
    await this.investimentoService.getInvestimentos().subscribe(value => this.listaDeInvestimentos = value);
    console.log(this.listaDeInvestimentos);
    
  }
  

}
