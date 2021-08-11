import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { FeriasComponent } from './pages/ferias/ferias.component';
import { LacabinaComponent } from './pages/lacabina/lacabina.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'ferias', component: FeriasComponent } ,
  { path: 'lacabina', component: LacabinaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

