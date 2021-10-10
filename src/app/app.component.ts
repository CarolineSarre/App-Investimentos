import { Component } from '@angular/core';
import * as $ from 'jquery';
import 'foundation-sites';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'investimentos';
  ngOnInit() {
    $(document).ready(function () {
      $(document).foundation();
    });
  }
  constructor(){}
}