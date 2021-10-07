import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FiltroComponent } from './filtro/filtro.component';
import { InvestimentosComponent } from './investimentos/investimentos.component';
import { FiltroLateralComponent } from './filtro-lateral/filtro-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FiltroComponent,
    InvestimentosComponent,
    FiltroLateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
