import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ferias-detalle',
  templateUrl: './ferias-detalle.component.html',
  styleUrls: ['./ferias-detalle.component.css']
})
export class FeriasDetalleComponent implements OnInit {

  constructor() { }

  @Input() titulo?: string
  @Input() descripcion?: string;
  @Input() productos?: string;
  @Input() instagram?: string;
  @Input() pagina?: string;


  ngOnInit(): void {
  }

}
