import { Component, OnInit } from '@angular/core';
import artistas from './../../../assets/data/artistas.json';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent implements OnInit {
  
  public artistasList: {nombre: string, texto: string, discos:string[]}[] = artistas;

  constructor() { }

  ngOnInit(): void {
    console.log(this.artistasList);
    
  }

}
