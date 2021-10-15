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
  }

  getInvestimentos(){
   return this.http.get<any>(`https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full`);
  }


}
