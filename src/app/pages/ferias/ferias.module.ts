import { FeriasComponent } from './ferias.component';
import { NgModule } from '@angular/core';
import { FeriasDetalleModule } from './ferias-detalle/ferias-detalle.module';

@NgModule({
    imports: [FeriasDetalleModule],
    exports: [FeriasComponent],
    declarations: [FeriasComponent],
    providers: [],
 })
 
 export class FeriasModule {
 }