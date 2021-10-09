import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
   return this.http.get<any>(`http://localhost:3000/investimentos`);
  }
}
