import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'jquery';


@Injectable()

export class InvestimentosService {
  apiURL!: string;
  resultado!: object;

  constructor(
    private http: HttpClient,
  ) { 
    this.apiURL = 'http://localhost:3000';
  }

  getInvestimentos(){
   return this.http.get<any>(`${this.apiURL}/investimentos`);
  }


}
