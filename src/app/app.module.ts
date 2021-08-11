import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleModule } from './title/title.module';
import { NavModule } from './pages/nav/nav.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HistoriaModule } from './pages/historia/historia.module';
import { FeriasModule } from './pages/ferias/ferias.module';
import { HomeModule } from './pages/home/home.module';
import { LacabinaModule } from './pages/lacabina/lacabina.module';
import { ArtistasModule } from './pages/artistas/artistas.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule,
    TitleModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    HistoriaModule,
    FeriasModule,
    HomeModule,
    LacabinaModule,
    ArtistasModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
