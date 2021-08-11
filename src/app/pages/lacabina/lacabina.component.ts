import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lacabina',
  templateUrl: './lacabina.component.html',
  styleUrls: ['./lacabina.component.css']
})
export class LacabinaComponent implements OnInit {

  constructor() { }

  title = "Seccion La Cabina"
  subtitle = "La cabina"

  ngOnInit(): void {
  }

}
