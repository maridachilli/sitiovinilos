import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  constructor() { }

  title = "Seccion Historia"
  subtitle = "Historia"

  ngOnInit(): void {
  }

}
