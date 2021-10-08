import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.component.html',
  styleUrls: ['./investimentos.component.css']
})
export class InvestimentosComponent implements OnInit {
  listaInvestimentos: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.listaInvestimentos = [1,2,3,4,5,6,7,8,9]
  }

}
