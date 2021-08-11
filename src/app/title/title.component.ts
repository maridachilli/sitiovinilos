import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {

  constructor() { }

  @Input() title: string = "Contenido";
  @Input() subtitle?: string;


  ngOnInit(): void {
  }

}
