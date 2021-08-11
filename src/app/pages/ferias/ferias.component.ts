import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ferias',
  templateUrl: './ferias.component.html',
  styleUrls: ['./ferias.component.css']
})
export class FeriasComponent implements OnInit {

  constructor() { }

  title = "Seccion Ferias"
  subtitle = "Ferias"

  ngOnInit(): void {
  }

}
