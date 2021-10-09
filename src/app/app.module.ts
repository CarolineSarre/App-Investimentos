import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FiltroComponent } from './filtro/filtro.component';
import { InvestimentosComponent } from './investimentos/investimentos.component';
import { FiltroLateralComponent } from './filtro-lateral/filtro-lateral.component';
import { LegendaComponent } from './legenda/legenda.component';
import { InvestimentosService } from './investimentos/investimentos.service';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FiltroComponent,
    InvestimentosComponent,
    FiltroLateralComponent,
    LegendaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    InvestimentosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
