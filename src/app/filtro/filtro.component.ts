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

  queryField = new FormControl();
  @Input() textoBuscafiltro ;
  @Output() childToParent = new EventEmitter<any>();

  

  constructor( private investimentosService: InvestimentosService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  sendToParent(value: any){
    this.childToParent.emit((<HTMLInputElement>value.target).value);
  }
  
  pesquisar(){
    let value = this.queryField.valueChanges;

    // if(value && ( value = value.trim()) != ''){
    //   const find = (items, text) => {
    //     text = text.split(' ');
    //     return items.filter(function (item) {
    //       return text.every(function (el) {
    //         return item.nome.indexOf(el) > -1;
    //       });
    //     })
    //   }
    // }    
  }

}

