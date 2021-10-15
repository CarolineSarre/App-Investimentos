import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InvestimentosService } from './investimentos.service'

@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.component.html',
  styleUrls: ['./investimentos.component.css']
})
export class InvestimentosComponent implements OnInit {
  @Output() listaDeInvestimentos: any[] = [];
  @Input() textBuscaInvestimentos;
  constructor( 
    public investimentoService: InvestimentosService
  ) { }

  ngOnInit(): void {
    this.listarInvestimentos();

   }

  listarInvestimentos(){
   this.investimentoService.getInvestimentos().subscribe(value => this.listaDeInvestimentos = value);

   console.log(this.listaDeInvestimentos)
  
  
  }
  mapearRisco(valor: number){
      switch (valor) {
        case 1: { return 'fundos risco-1' };
        case 2: { return 'fundos risco-2' };
        case 3: { return 'fundos risco-3' };
        case 4: { return 'fundos risco-4' };
        case 5: { return 'fundos risco-5' };
        case 6: { return 'fundos risco-6' };
        case 7: { return 'fundos risco-7' };
        case 8: { return 'fundos risco-8' };
        case 9: { return 'fundos risco-9' };
        case 10: { return 'fundos risco-10' };
        case 11: { return 'fundos risco-11' };
        case 12: { return 'fundos risco-12' };
        default: { return 'fundos' };
      }
  }
  
  

}
