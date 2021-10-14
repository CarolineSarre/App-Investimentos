import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as $ from 'jquery';
import 'foundation-sites';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'investimentos';
  textoBusca = 'XABLAU'
  ngOnInit() {
    $(document).ready(function () {
      $(document).foundation();
    });
  }

  changeTextoBusca(value: any) {
    this.textoBusca = value
  }
  constructor(){}
}