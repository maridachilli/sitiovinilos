import { ArtistasComponent } from './artistas.component';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';  
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    imports: [
        MatListModule,
        CommonModule,
        MatIconModule
    ],
    exports: [ArtistasComponent],
    declarations: [ArtistasComponent],
    providers: [],
 })
 
 export class ArtistasModule {
 }